// client.js - socket + rendering
const socket = io();

let myId = null;
let state = { players: {}, animatroniks: [] };
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ROOM_POS = {
  Entrance: {x:100,y:100},
  Hallway: {x:300,y:100},
  CamCorridor: {x:500,y:100},
  LeftVent: {x:300,y:250},
  RightVent: {x:500,y:250},
  OfficeDoor: {x:700,y:150},
  Office: {x:750,y:250}
};

const ROOM_DRAW_ORDER = ['Entrance','Hallway','CamCorridor','LeftVent','RightVent','OfficeDoor','Office'];

const uiName = document.getElementById('name');
const playersList = document.getElementById('players');
const animsList = document.getElementById('anims');
const batteryEl = document.getElementById('battery');
const statusEl = document.getElementById('status');

socket.on('init', (data) => {
  myId = data.id;
  state.players = data.players;
  state.animatroniks = data.animatroniks || [];
  uiName.innerText = state.players[myId].name + ' (TY)';
  draw();
});

socket.on('playerJoined', (p) => {
  state.players[p.id] = p;
});

socket.on('playerLeft', (id) => {
  delete state.players[id];
});

socket.on('state', (s) => {
  // merge state for smooth rendering (server authoritative)
  state.players = s.players;
  state.animatroniks = s.animatroniks;
  updateUI();
});

function updateUI() {
  // players list
  playersList.innerHTML = '';
  Object.values(state.players).forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} ${p.alive ? '' : '(dead)'} - Doors L:${p.doors.left ? 'C' : 'O'} R:${p.doors.right ? 'C' : 'O'} Cam:${p.camera ? 'ON' : 'OFF'} B:${Math.round(p.battery)}`;
    playersList.appendChild(li);
    if (p.id === myId) {
      batteryEl.innerText = 'Bateria: ' + Math.round(p.battery);
    }
  });

  // anims
  animsList.innerHTML = '';
  state.animatroniks.forEach(a => {
    const li = document.createElement('li');
    li.textContent = `${a.label} - ${a.state} - ${a.path[a.pathIdx] || ''}`;
    animsList.appendChild(li);
  });

  const me = state.players[myId];
  if (me && !me.alive) statusEl.innerText = 'Jesteś martwy — odśwież stronę, by dołączyć ponownie.';
  else statusEl.innerText = '';
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'q' || e.key === 'Q') {
    socket.emit('toggleDoor', 'left');
  } else if (e.key === 'e' || e.key === 'E') {
    socket.emit('toggleDoor', 'right');
  } else if (e.key === 'c' || e.key === 'C') {
    socket.emit('toggleCamera');
  } else if (e.key === 'f' || e.key === 'F') {
    socket.emit('useFlash');
  }
});

// drawing
function drawRoom(x,y,label) {
  // room box
  ctx.fillStyle = '#121212';
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.fillRect(x-60,y-40,120,80);
  ctx.strokeRect(x-60,y-40,120,80);
  ctx.fillStyle = '#888';
  ctx.font = '12px system-ui';
  ctx.fillText(label, x-40, y-45);
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // draw rooms
  ROOM_DRAW_ORDER.forEach(r => {
    const p = ROOM_POS[r];
    drawRoom(p.x, p.y, r);
  });

  // draw animatroniks
  state.animatroniks.forEach((a, idx) => {
    const path = a.path;
    const idxRoom = Math.max(0, Math.min(a.pathIdx || 0, path.length-1));
    const from = ROOM_POS[path[idxRoom]] || ROOM_POS.Office;
    // if progress >0 and next exists, lerp to next
    let pos = { x: from.x, y: from.y };
    if (a.pathIdx < path.length - 1) {
      const to = ROOM_POS[path[a.pathIdx+1]];
      if (to) {
        const t = a.progress || 0;
        pos.x = from.x + (to.x - from.x) * t;
        pos.y = from.y + (to.y - from.y) * t;
      }
    }
    // color by id
    const colors = ['#ff6666','#66b3ff','#ffff66','#ff66ff','#66ff99','#ffa366'];
    ctx.fillStyle = colors[(a.id-1) % colors.length];
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 14, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.font = '11px system-ui';
    ctx.fillText(a.label, pos.x-20, pos.y-20);
    // state marker
    ctx.fillStyle = '#fff';
    ctx.fillText(a.state, pos.x-20, pos.y+28);
  });

  // draw players (office)
  Object.values(state.players).forEach(p => {
    const pos = p.pos || ROOM_POS.Office;
    ctx.fillStyle = p.id === myId ? '#ffffff' : '#ffcc00';
    if (!p.alive) ctx.fillStyle = '#444';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = '12px system-ui';
    ctx.fillText(p.name, pos.x-20, pos.y-16);
    // draw left/right door indicator near OfficeDoor
    if (p.id === myId) {
      ctx.fillStyle = '#ddd';
      ctx.fillText(`Drzwi L:${p.doors.left ? 'C' : 'O'} R:${p.doors.right ? 'C' : 'O'}`, 10, canvas.height - 20);
    }
  });

  requestAnimationFrame(draw);
}

draw();
