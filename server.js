// server.js
// Node.js + Express + Socket.IO autoritative server
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// --- Game state ---
let players = {}; // socketId -> {id, name, doors: {left:false,right:false}, pos:{x,y}, camera:false, alive:true, battery:100}
let animatroniks = []; // list of animatronik objects
let nextAnimId = 1;

const ROOM_ORDER = ['Entrance', 'Hallway', 'LeftVent', 'RightVent', 'CamCorridor', 'OfficeDoor', 'Office'];

const ROOM_POS = {
  Entrance: {x:100,y:100},
  Hallway: {x:300,y:100},
  CamCorridor: {x:500,y:100},
  LeftVent: {x:300,y:250},
  RightVent: {x:500,y:250},
  OfficeDoor: {x:700,y:150},
  Office: {x:750,y:250}
};

// create animatroniks (6 of them)
function createAnimatroniks() {
  animatroniks = [];
  // Each animatronik has: id, label, path (array of room indices), posIndex, progress, speed, state
  // Different behavior presets
  const presets = [
    { label: 'Animatronik 1', path: ['Entrance','Hallway','CamCorridor','OfficeDoor','Office'], speed: 0.005, aggression: 0.6 }, // slow, steady
    { label: 'Animatronik 2', path: ['LeftVent','Hallway','OfficeDoor','Office'], speed: 0.007, aggression: 0.7 }, // left vent attacker
    { label: 'Animatronik 3', path: ['RightVent','Hallway','OfficeDoor','Office'], speed: 0.007, aggression: 0.7 }, // right vent attacker
    { label: 'Animatronik 4', path: ['CamCorridor','OfficeDoor','Office'], speed: 0.009, aggression: 0.8 }, // quick corridor attacker
    { label: 'Animatronik 5', path: ['Hallway','CamCorridor','OfficeDoor','Office'], speed: 0.006, aggression: 0.5 }, // wanderer
    { label: 'Animatronik 6', path: ['Entrance','Hallway','LeftVent','OfficeDoor','Office'], speed: 0.004, aggression: 0.9 } // puppet-like (special)
  ];

  presets.forEach(p => {
    animatroniks.push({
      id: nextAnimId++,
      label: p.label,
      path: p.path.slice(),
      index: 0, // index into path
      progress: 0,
      speed: p.speed,
      aggression: p.aggression,
      state: 'idle', // idle, moving, atdoor, attacking, reset
      targetPlayer: null,
      stuckTimer: 0
    });
  });
}

createAnimatroniks();

io.on('connection', socket => {
  console.log('conn', socket.id);
  // create player
  players[socket.id] = {
    id: socket.id,
    name: 'Player' + Math.floor(Math.random()*1000),
    doors: { left: false, right: false },
    camera: false,
    alive: true,
    battery: 100,
    pos: { x: ROOM_POS.Office.x + (Math.random()*40-20), y: ROOM_POS.Office.y + (Math.random()*40-20) }
  };

  // send init
  socket.emit('init', { id: socket.id, players, animatroniks });

  // broadcast join
  io.emit('playerJoined', players[socket.id]);

  socket.on('toggleDoor', (side) => {
    const p = players[socket.id];
    if (!p || !p.alive) return;
    if (side === 'left' || side === 'right') {
      p.doors[side] = !p.doors[side];
    }
  });

  socket.on('toggleCamera', () => {
    const p = players[socket.id];
    if (!p || !p.alive) return;
    p.camera = !p.camera;
  });

  socket.on('useFlash', () => {
    const p = players[socket.id];
    if (!p || !p.alive) return;
    if (p.battery <= 0) return;
    p.battery = Math.max(0, p.battery - 5);
    // Scare nearby animatroniks: any anim within 120 px of Office -> push back
    animatroniks.forEach(a => {
      const posRoom = ROOM_POS[a.path[Math.min(a.index, a.path.length-1)]];
      const dx = posRoom.x - ROOM_POS.Office.x;
      const dy = posRoom.y - ROOM_POS.Office.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 130) {
        // push back one room
        if (a.index > 0) {
          a.index = Math.max(0, a.index - 1);
          a.progress = 0;
          a.state = 'movedBack';
          a.stuckTimer = 0;
        }
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('left', socket.id);
    delete players[socket.id];
    io.emit('playerLeft', socket.id);
  });
});

// Simple helper: choose random alive player id
function chooseRandomPlayer() {
  const ids = Object.keys(players).filter(id => players[id].alive);
  if (ids.length === 0) return null;
  return ids[Math.floor(Math.random()*ids.length)];
}

// Tick: update animatroniks
const TICK = 50; // ms -> 20hz
setInterval(() => {
  // each animatronik decides target randomly sometimes
  animatroniks.forEach(a => {
    if (!a.targetPlayer || Math.random() < 0.005) {
      a.targetPlayer = chooseRandomPlayer();
    }

    // speed mod by aggression and number of players
    const playerCount = Math.max(1, Object.keys(players).length);
    let speed = a.speed * (1 + (a.aggression - 0.5) * 0.6);

    // movement along path
    if (a.index < a.path.length - 1) {
      a.state = 'moving';
      a.progress += speed;
      if (a.progress >= 1) {
        a.index++;
        a.progress = 0;
      }
    } else {
      // at final room (OfficeDoor or Office)
      if (a.path[a.index] === 'Office') {
        // direct attack
        a.state = 'attacking';
      } else {
        // at office door - check target player's doors
        const target = players[a.targetPlayer];
        // decide which side we are on based on path (LeftVent -> left, RightVent -> right)
        let side = 'left';
        if (a.path.includes('RightVent')) side = 'right';
        if (!target) {
          // no target -> wander back a bit
          a.stuckTimer++;
          if (a.stuckTimer > 40) {
            a.index = Math.max(0, a.index - 1);
            a.stuckTimer = 0;
            a.progress = 0;
          }
        } else {
          if (target.doors[side] === true) {
            // door closed -> animatronik waits and maybe leave
            a.state = 'atdoor';
            a.stuckTimer++;
            if (Math.random() < 0.02) {
              // sometimes give up and step back
              a.index = Math.max(0, a.index - 1);
              a.progress = 0;
              a.state = 'movedBack';
              a.stuckTimer = 0;
            }
          } else {
            // door open -> move into office
            a.state = 'movingToOffice';
            // move to Office next tick
            if (a.index < a.path.length - 1) {
              a.index++;
              a.progress = 0;
            } else {
              // already at last index but last != Office
              a.index = a.path.length - 1;
            }
          }
        }
      }
    }

    // if ultimately in Office (arrived), kill target player
    if (a.path[a.index] === 'Office') {
      // find nearest alive player (target or any)
      let victim = null;
      if (a.targetPlayer && players[a.targetPlayer] && players[a.targetPlayer].alive) victim = players[a.targetPlayer];
      else {
        const aliveIds = Object.keys(players).filter(id => players[id].alive);
        if (aliveIds.length > 0) victim = players[aliveIds[Math.floor(Math.random()*aliveIds.length)]];
      }
      if (victim) {
        // if victim has neither door closed (doors in office maybe both?), attack
        if (!victim.doors.left && !victim.doors.right) {
          victim.alive = false;
          // reset animatronik after attack
          a.state = 'reset';
          a.index = 0;
          a.progress = 0;
          a.targetPlayer = null;
        } else {
          // if any door closed, animatronik will stay in OfficeDoor instead - but for simplicity, step back
          a.index = Math.max(0, a.index - 1);
          a.progress = 0;
          a.state = 'movedBack';
        }
      }
    }
  });

  // slowly drain battery for players who have camera on
  Object.values(players).forEach(p => {
    if (!p.alive) return;
    if (p.camera) {
      p.battery = Math.max(0, p.battery - 0.1);
      if (p.battery <= 0) p.camera = false;
    }
  });

  // Broadcast state (compact)
  io.emit('state', {
    players: players,
    animatroniks: animatroniks.map(a => ({
      id: a.id,
      label: a.label,
      pathIdx: a.index,
      path: a.path,
      progress: a.progress,
      state: a.state
    })),
    t: Date.now()
  });

}, TICK);

server.listen(PORT, () => console.log('Server listening on', PORT));
