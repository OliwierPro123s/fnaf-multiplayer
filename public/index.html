<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Ultimate Szachy — Kampania</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial, sans-serif}
body{height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#1f1c2c,#928dab)}
h1{color:#fff;text-align:center;margin-bottom:20px}
.menu,.mode-menu,.difficulty-menu,.options-menu,.time-menu,.promotion-menu{background:rgba(255,255,255,0.08);padding:36px 56px;border-radius:18px;backdrop-filter:blur(6px);text-align:center;box-shadow:0 6px 30px rgba(0,0,0,0.4)}
.menu a,.mode-menu button,.difficulty-menu button,.options-menu button,.time-menu button,.promotion-menu button{display:block;margin:10px auto;padding:10px 30px;font-size:18px;color:#fff;text-decoration:none;border:2px solid #fff;border-radius:10px;cursor:pointer;background:transparent;position:relative;overflow:hidden;transition:0.22s}
.menu a:hover,.mode-menu button:hover,.difficulty-menu button:hover,.options-menu button:hover,.time-menu button:hover,.promotion-menu button:hover{color:#1f1c2c;background:#fff;box-shadow:0 0 16px #fff}
.menu a::before,.mode-menu button::before,.difficulty-menu button::before,.options-menu button::before,.time-menu button::before,.promotion-menu button::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:rgba(255,255,255,0.18);transition:0.45s;transform:skewX(-20deg)}
.menu a:hover::before,.mode-menu button:hover::before,.difficulty-menu button:hover::before,.options-menu button:hover::before,.time-menu button:hover::before,.promotion-menu button:hover::before{left:100%}

/* hide extreme button (mode removed from menu) */
#extremeBtn { display: none !important; }

/* show only main menu initially */
.mode-menu,.difficulty-menu,.options-menu,.time-menu,.promotion-menu,#gameBoard{display:none}
.menu{display:block}

/* chessboard */
.chessboard{display:grid;grid-template-columns:repeat(8,64px);grid-template-rows:repeat(8,64px);gap:0;margin:18px auto}
.cell{width:64px;height:64px;display:flex;justify-content:center;align-items:center;user-select:none;cursor:pointer;padding:4px;position:relative}
.cell.white{background:#f0d9b5}
.cell.black{background:#b58863}
.cell.highlight{outline:3px solid rgba(255,255,0,0.9);box-sizing:border-box}

/* new move/capture visuals */
.cell.move{box-shadow:inset 0 0 0 3px rgba(0,255,127,0.18);}
.cell.capture{outline:3px solid rgba(255,80,80,0.9);}
.cell.capture::after{content:"";position:absolute;top:6px;right:6px;width:14px;height:14px;border-radius:50%;background:rgba(255,80,80,0.95);display:block}

/* image pieces styling */
.piece{ width:56px; height:56px; object-fit:contain; pointer-events:none; display:block; margin:auto; }

/* pawn custom badge (visual to show custom pawn) */
.pawn-badge{
  position:absolute;
  top:6px;
  left:6px;
  width:12px;
  height:12px;
  border-radius:50%;
  border:2px solid rgba(255,255,255,0.85);
  box-shadow:0 0 6px rgba(0,0,0,0.4);
  pointer-events:none;
  display:block;
}

/* used indicator (dim) */
.pawn-badge.used{ opacity:0.45; transform:scale(0.95); }

/* info + timers */
#info{color:#fff;text-align:center;margin-top:10px}
#timers{color:#fff;text-align:center;margin-top:6px;font-size:16px}
#backToMenuBtn{display:none;margin-top:16px;padding:8px 26px;font-size:18px;border-radius:10px;border:2px solid #fff;color:#fff;background:transparent;cursor:pointer}
#backToMenuBtn:hover{background:#fff;color:#1f1c2c}

/* promotion menu smaller */
.promotion-menu button{display:inline-block;margin:8px;padding:8px 16px;font-size:16px}

/* compact header */
#gameBoard h1{font-size:22px;margin-bottom:6px}

/* volume slider style */
.volume-row{margin-top:12px;color:#fff;display:flex;align-items:center;gap:10px;justify-content:center}
.volume-row input[type="range"]{width:200px}
.volume-value{min-width:36px;text-align:center}

/* playlist select style */
.playlist-row{margin-top:14px;color:#fff;display:flex;align-items:center;gap:10px;justify-content:center}
.playlist-row select{padding:6px 10px;border-radius:8px;background:transparent;color:#fff;border:2px solid #fff}

/* color choose row */
.color-row{margin-top:12px;color:#fff;display:flex;align-items:center;gap:10px;justify-content:center}
.color-row button{display:inline-block;padding:8px 16px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer}
.color-row button.selected{background:#fff;color:#1f1c2c}

/* offer box (bot offers draw) */
#offerBox{display:none;margin:12px auto;padding:12px;border-radius:10px;border:2px solid #fff;background:rgba(255,255,255,0.04);color:#fff;text-align:center}
#offerBox button{margin:6px;padding:6px 12px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer}
#playerControls{display:flex;gap:10px;justify-content:center;margin-top:12px}
#playerControls button{padding:8px 14px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer}

/* multiplayer menu small */
.multiplayer-menu{background:rgba(255,255,255,0.08);padding:28px 46px;border-radius:18px;backdrop-filter:blur(6px);text-align:center;box-shadow:0 6px 30px rgba(0,0,0,0.4);display:none;margin-top:10px}
.multiplayer-menu button{display:block;margin:10px auto;padding:8px 26px;font-size:18px;color:#fff;border:2px solid #fff;border-radius:10px;background:transparent;cursor:pointer}
.multiplayer-menu button:hover{color:#1f1c2c;background:#fff;box-shadow:0 0 12px #fff}

/* campaign menu */
.campaign-menu{background:rgba(255,255,255,0.06);padding:28px 46px;border-radius:18px;backdrop-filter:blur(6px);text-align:center;box-shadow:0 6px 30px rgba(0,0,0,0.4);display:none;margin-top:10px;color:#fff}
.campaign-list{max-height:220px;overflow:auto;text-align:left;margin:12px auto;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);width:320px}
.campaign-item{padding:6px 8px;border-bottom:1px dashed rgba(255,255,255,0.04)}
.campaign-progress{margin-top:10px}
.campaign-controls{margin-top:12px}
.campaign-controls button{margin:6px;padding:8px 18px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer}

/* multiplayer lobby specific */
#lobbyControls{margin-top:12px;color:#fff}
#nickInput{padding:6px 10px;border-radius:8px;background:transparent;color:#fff;border:2px solid #fff;margin-bottom:10px;width:200px}
#connectBtn{display:inline-block;padding:8px 12px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer}
#playersList{margin-top:12px;text-align:left;max-height:180px;overflow:auto;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);width:320px;background:rgba(255,255,255,0.02)}
.player-row{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-bottom:1px dashed rgba(255,255,255,0.04)}
.player-row:last-child{border-bottom:none}
.player-nick{color:#fff}
.duel-btn{padding:6px 10px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer;margin-left:8px}
.duel-btn:hover{background:#fff;color:#1f1c2c}

/* invite modal */
#inviteModal{display:none;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);padding:18px;border-radius:12px;border:2px solid #fff;color:#fff;z-index:999}
#inviteModal button{margin:6px;padding:6px 12px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer}
#inviteModal .modal-row{margin:8px 0;text-align:center}

/* small status */
#multiplayerStatus{color:#fff;margin-top:8px}

/* responsive tweak */
@media (max-width:520px){ .menu,.mode-menu,.difficulty-menu,.options-menu,.time-menu,.promotion-menu{padding:18px 26px} .chessboard{transform:scale(0.8)} }
</style>
</head>
<body>

<!-- Menu główne -->
<div class="menu" id="mainMenu">
  <h1>Ultimate Szachy</h1>
  <a href="#" id="newGameBtn">Nowa Gra</a>
  <a href="#" id="optionsBtn">Opcje</a>
  <a href="#" id="exitBtn">Wyjście</a>
</div>

<!-- Menu trybu gry -->
<div class="mode-menu" id="modeMenu">
  <h1>Wybierz tryb gry</h1>
  <button id="botModeBtn">Graj z botem</button>
  <button id="multiModeBtn">Multiplayer</button>
  <button id="campaignModeBtn">Kampania</button>

  <!-- DODANO: wybór koloru gracza -->
  <div class="color-row">
    <label>Wybierz kolor:</label>
    <button id="chooseWhiteBtn" class="selected">Biały</button>
    <button id="chooseBlackBtn">Czarny</button>
  </div>

  <button id="backModeBtn">Powrót</button>
</div>

<!-- Campaign menu -->
<div class="campaign-menu" id="campaignMenu">
  <h1>Kampania — Mapa 1</h1>
  <p>Masz do pokonania 10 botów na tej mapie. Każdy bot ma prostą sztuczną inteligencję. Powodzenia!</p>
  <div class="campaign-list" id="campaignList"></div>
  <div class="campaign-progress" id="campaignProgress">Postęp: 0 / 10</div>
  <div class="campaign-controls">
    <button id="startCampaignBtn">Rozpocznij kampanię</button>
    <button id="continueCampaignBtn" style="display:none">Kontynuuj</button>
    <button id="resetCampaignSaveBtn" style="display:inline-block">Usuń zapis kampanii</button>
    <button id="backCampaignBtn">Powrót</button>
  </div>
</div>

<!-- Multiplayer menu (rozszerzone) -->
<div class="multiplayer-menu" id="multiplayerMenu">
  <h1>Multiplayer</h1>
  <p style="color:#fff;margin-bottom:12px;">Wybierz sposób przypisania koloru</p>

  <!-- Lobby UI: nick, connect, players list -->
  <div id="lobbyControls">
    <input id="nickInput" placeholder="Twój nick" maxlength="20" />
    <div>
      <button id="connectBtn">Połącz z serwerem</button>
      <button id="disconnectBtn" style="display:none">Rozłącz</button>
    </div>
    <div id="multiplayerStatus">Niepołączony</div>
    <div id="playersList" aria-live="polite"></div>
  </div>

  <button id="randomMultiplayerBtn">Random (50% Biały / 50% Czarny)</button>
  <button id="localMultiplayerBtn">Gra lokalna (wybierz ręcznie)</button>
  <button id="backMultiplayerBtn">Powrót</button>
</div>

<!-- Menu trudności -->
<div class="difficulty-menu" id="difficultyMenu">
  <h1>Poziom trudności</h1>
  <button id="easyBtn">Łatwy</button>
  <button id="mediumBtn">Średni</button>
  <button id="hardBtn">Trudny</button>
  <!-- EXTREME BUTTON REMOVED FROM MENU VISIBILITY -->
  <button id="extremeBtn">Ekstremalny</button>
  <button id="backDifficultyBtn">Powrót</button>
</div>

<!-- Menu czasu -->
<div class="time-menu" id="timeMenu">
  <h1>Wybierz czas gry</h1>
  <button data-time="1">1 min</button>
  <button data-time="3">3 min</button>
  <button data-time="5">5 min</button>
  <button data-time="10">10 min</button>
  <button data-time="0">Bez czasu</button>
  <button id="backTimeBtn">Powrót</button>
</div>

<!-- Opcje -->
<div class="options-menu" id="optionsMenu">
  <h1>Opcje</h1>
  <button id="musicToggleBtn">Włącz/wyłącz muzykę</button>

  <!-- DODANO: suwak głośności 0-100 -->
  <div class="volume-row">
    <label for="volumeRange">Głośność:</label>
    <input type="range" id="volumeRange" min="0" max="100" value="100">
    <span class="volume-value" id="volumeValue">100</span>%
  </div>

  <!-- DODANO: wybór utworu (oryginalny + 9 nowych) -->
  <div class="playlist-row">
    <label for="trackSelect">Utwór:</label>
    <select id="trackSelect">
      <option value="https://www.bensound.com/bensound-music/bensound-epic.mp3">Original — Epic (domyślny)</option>
      <option value="https://www.bensound.com/bensound-music/bensound-thedeclineofmankind.mp3">The Decline Of Man Kind</option>
      <option value="https://www.bensound.com/bensound-music/bensound-sunny.mp3">Sunny</option>
      <option value="https://www.bensound.com/bensound-music/bensound-creativeminds.mp3">Creative Minds</option>
      <option value="https://www.bensound.com/bensound-music/bensound-energy.mp3">Energy</option>
      <option value="https://www.bensound.com/bensound-music/bensound-buddy.mp3">Buddy</option>
      <option value="https://www.bensound.com/bensound-music/bensound-goinghigher.mp3">Going Higher</option>
      <option value="https://www.bensound.com/bensound-music/bensound-happyrock.mp3">Happy Rock</option>
      <option value="https://www.bensound.com/bensound-music/bensound-slowmotion.mp3">Slow Motion</option>
      <option value="https://www.bensound.com/bensound-music/bensound-ukulele.mp3">Alternative Ukulele</option>
    </select>
  </div>

  <button id="backOptionsBtn">Powrót</button>
</div>

<!-- Promocja -->
<div class="promotion-menu" id="promotionMenu">
  <h1>Wybierz figurę do promocji</h1>
  <button data-piece="Q">Hetman</button>
  <button data-piece="R">Wieża</button>
  <button data-piece="B">Goniec</button>
  <button data-piece="N">Koń</button>
</div>

<!-- Gra -->
<div id="gameBoard">
  <h1 style="color:#fff;text-align:center;">Szachownica</h1>
  <div id="timers">
    <span id="whiteTimer">Biały: --:--</span> | <span id="blackTimer">Czarny: --:--</span>
  </div>
  <div class="chessboard" id="chessboard"></div>
  <p id="info"></p>

  <!-- offer box: when bot offers draw it appears here -->
  <div id="offerBox">
    <div id="offerText"></div>
    <div>
      <button id="acceptOfferBtn">Akceptuj</button>
      <button id="declineOfferBtn">Odrzuć</button>
    </div>
  </div>

  <!-- player controls: offer draw / resign -->
  <div id="playerControls">
    <button id="offerDrawBtn">Zaproponuj remis</button>
    <button id="resignBtn">Poddaj się</button>
  </div>

  <button id="backToMenuBtn">Wyjdź do menu</button>

  <!-- campaign status inside game view -->
  <div id="campaignStatus" style="color:#fff;text-align:center;margin-top:12px;display:none"></div>
  <div id="campaignResultButtons" style="text-align:center;margin-top:8px;display:none">
    <button id="campaignNextBtn" style="margin-right:8px;padding:6px 12px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer">Dalej</button>
    <button id="campaignRetryBtn" style="padding:6px 12px;border-radius:8px;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer">Powtórz</button>
  </div>
</div>

<!-- oryginalny element audio — zachowany -->
<audio id="bgMusic" loop src="https://www.bensound.com/bensound-music/bensound-epic.mp3"></audio>

<!-- invite modal (for incoming invites and for sending duel options) -->
<div id="inviteModal" role="dialog" aria-hidden="true">
  <div id="inviteText"></div>
  <div class="modal-row" id="inviteOptions" style="display:none">
    <label>Wybierz kolor:</label>
    <select id="inviteColorSelect">
      <option value="random">Losowo</option>
      <option value="white">Biały</option>
      <option value="black">Czarny</option>
    </select>
  </div>
  <div class="modal-row" id="inviteButtons"></div>
</div>

<script>
// ---------- MULTIPLAYER CONFIG ----------
const MULTIPLAYER_WS = 'wss://your-multiplayer-server.example/ws'; // <-- wstaw swój serwer WebSocket tutaj

// ---------- UI references (existing ones kept) ----------
const mainMenu = document.getElementById('mainMenu');
const modeMenu = document.getElementById('modeMenu');
const difficultyMenu = document.getElementById('difficultyMenu');
const timeMenu = document.getElementById('timeMenu');
const optionsMenu = document.getElementById('optionsMenu');
const promotionMenu = document.getElementById('promotionMenu');
const gameBoard = document.getElementById('gameBoard');
const chessboardEl = document.getElementById('chessboard');
const info = document.getElementById('info');
const whiteTimerEl = document.getElementById('whiteTimer');
const blackTimerEl = document.getElementById('blackTimer');
const bgMusic = document.getElementById('bgMusic');
const backToMenuBtn = document.getElementById('backToMenuBtn');

const volumeRange = document.getElementById('volumeRange');
const volumeValue = document.getElementById('volumeValue');
const trackSelect = document.getElementById('trackSelect');

const offerBox = document.getElementById('offerBox');
const offerText = document.getElementById('offerText');
const acceptOfferBtn = document.getElementById('acceptOfferBtn');
const declineOfferBtn = document.getElementById('declineOfferBtn');

const offerDrawBtn = document.getElementById('offerDrawBtn');
const resignBtn = document.getElementById('resignBtn');

let totalTime=0, whiteTime=0, blackTime=0, timerInterval=null, gameOver=false;
let selected=null, turn='white', board=[], promotionCallback=null, selectedDifficulty='easy';

// ---------- DODANO: playerColor (domyślnie biały) i botColor ----------
let playerColor = 'white'; // 'white' lub 'black'
let botColor = 'black';     // przeciwny do playerColor

// ---------- DODANO: multiplayer flag ----------
let isMultiplayer = false;
let isCampaign = false; // flag for campaign mode
let campaignIndex = 0; // which opponent currently
let campaignOpponents = [];

const chooseWhiteBtn = document.getElementById('chooseWhiteBtn');
const chooseBlackBtn = document.getElementById('chooseBlackBtn');

// multiplayer lobby refs
const multiplayerMenu = document.getElementById('multiplayerMenu');
const nickInput = document.getElementById('nickInput');
const connectBtn = document.getElementById('connectBtn');
const disconnectBtn = document.getElementById('disconnectBtn');
const playersListEl = document.getElementById('playersList');
const multiplayerStatus = document.getElementById('multiplayerStatus');

// invite modal refs
const inviteModal = document.getElementById('inviteModal');
const inviteText = document.getElementById('inviteText');
const inviteButtons = document.getElementById('inviteButtons');
const inviteOptions = document.getElementById('inviteOptions');
const inviteColorSelect = document.getElementById('inviteColorSelect');

// campaign UI refs
const campaignMenu = document.getElementById('campaignMenu');
const campaignList = document.getElementById('campaignList');
const campaignProgress = document.getElementById('campaignProgress');
const startCampaignBtn = document.getElementById('startCampaignBtn');
const continueCampaignBtn = document.getElementById('continueCampaignBtn');
const resetCampaignSaveBtn = document.getElementById('resetCampaignSaveBtn');
const backCampaignBtn = document.getElementById('backCampaignBtn');

const campaignStatus = document.getElementById('campaignStatus');
const campaignResultButtons = document.getElementById('campaignResultButtons');
const campaignNextBtn = document.getElementById('campaignNextBtn');
const campaignRetryBtn = document.getElementById('campaignRetryBtn');

function updateColorsFromSelection(){
  botColor = (playerColor === 'white') ? 'black' : 'white';
}
chooseWhiteBtn.addEventListener('click', ()=>{
  playerColor = 'white';
  chooseWhiteBtn.classList.add('selected');
  chooseBlackBtn.classList.remove('selected');
  updateColorsFromSelection();
});
chooseBlackBtn.addEventListener('click', ()=>{
  playerColor = 'black';
  chooseBlackBtn.classList.add('selected');
  chooseWhiteBtn.classList.remove('selected');
  updateColorsFromSelection();
});
updateColorsFromSelection();

// ---------- WebAudio (do efektu zbicia pionka) ----------
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
function ensureAudioContext(){
  if(!audioCtx){
    audioCtx = new AudioContextClass();
  }
}
function playPawnCaptureSound(){
  try{
    ensureAudioContext();
    if(audioCtx.state === 'suspended') audioCtx.resume().catch(()=>{});
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const vol = Math.max(0, Math.min(1, parseInt(volumeRange.value||100,10)/100));
    g.gain.value = vol * 0.15;
    o.type = 'triangle';
    o.frequency.value = 1000;
    o.connect(g);
    g.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    g.gain.setValueAtTime(g.gain.value, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    o.start(now);
    o.stop(now + 0.16);
  }catch(e){ console.warn('AudioCtx error', e); }
}

// ---------- IMAGE LINKS (original ones preserved) ----------
const pieceImgs = {
  white: { 
    K: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
    Q: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
    R: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
    B: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
    N: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
    P: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
  },
  black: { 
    K: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
    Q: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
    R: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    B: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    N: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    P: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
  }
};

// ---------- Variant badge colors (keeps previous visual hints) ----------
const variantBadgeColor = {
  1: 'rgba(30,200,180,0.95)',   // Vanguard - aqua
  2: 'rgba(255,165,0,0.95)',    // Slider - orange
  3: 'rgba(220,20,60,0.95)',    // Assassin - crimson
  4: 'rgba(123,104,238,0.95)',  // Leaper - purple
  5: 'rgba(34,139,34,0.95)',    // Commander - green
  6: 'rgba(70,130,180,0.95)',   // Archer - steelblue
  7: 'rgba(218,165,32,0.95)',   // Scout - goldenrod
  8: 'rgba(199,21,133,0.95)',   // Jumper - deeppink
  9: 'rgba(105,105,105,0.95)'   // Swapper - grey
};

// ---------- Helpers to create polished pawn-like SVGs (white/black stylings) ----------
function svgToDataUri(svgString){
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
}

// returns svg data-uri for variant and color ('white' or 'black')
function getVariantSVG(variant, color){
  // choose fill / stroke depending on color for pawn-styled look
  // white: white fill + black stroke; black: black fill + white stroke
  const fill = (color==='white') ? '#ffffff' : '#111111';
  const stroke = (color==='white') ? '#111111' : '#ffffff';
  const smallStroke = (color==='white') ? '#2b2b2b' : '#cfcfcf';

  // base pawn silhouette (rounded base + body + head) with variant-specific ornament
  let svg = '';
  switch(variant){
    case 1: // classic styled pawn with small crest (Vanguard)
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g fill='${fill}' stroke='${stroke}' stroke-width='2'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M20 46 C20 36, 44 36, 44 46 L44 46 C44 50, 36 54, 32 54 C28 54,20 50,20 46Z' />
  <path d='M24 34 C28 30,36 30,40 34 C36 36,28 36,24 34Z' />
  <circle cx='32' cy='18' r='8' fill='${fill}' stroke='${stroke}' stroke-width='2'/>
  <!-- small crest -->
  <rect x='28' y='6' width='8' height='4' rx='1' fill='${smallStroke}' />
 </g></svg>`;
      break;
    case 2: // Slider — pawn with side "fins"
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g fill='${fill}' stroke='${stroke}' stroke-width='2'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M18 44 C24 36,40 36,46 44 L46 44 C42 48,26 48,32 52 C28 52,22 50,18 44Z' />
  <circle cx='32' cy='16' r='7' />
  <!-- left fin -->
  <path d='M12 32 C18 28,18 36,12 32Z' fill='${smallStroke}' stroke='${stroke}'/>
  <!-- right fin -->
  <path d='M52 32 C46 28,46 36,52 32Z' fill='${smallStroke}' stroke='${stroke}'/>
 </g></svg>`;
      break;
    case 3: // Assassin — sharp helmet (pointed head)
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M22 42 C28 34,36 34,42 42 L42 42 C38 46,26 46,32 52 C28 52,22 48,22 42Z' />
  <path d='M32 10 L40 18 L32 26 L24 18 Z' fill='${smallStroke}' stroke='${stroke}'/>
  <path d='M28 26 C30 24,34 24,36 26' stroke='${stroke}' fill='none' />
 </g></svg>`;
      break;
    case 4: // Leaper — pawn combined with knight-head silhouette
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M20 44 C26 36,38 36,44 44 L44 44 C40 48,28 48,32 52 C28 52,22 50,20 44Z' />
  <!-- knight head on top -->
  <path d='M18 20 C22 14,30 12,36 18 C38 20,40 22,36 26 C32 30,24 30,18 28 Z' fill='${smallStroke}' stroke='${stroke}'/>
  <circle cx='28' cy='22' r='1.6' fill='${stroke}'/>
 </g></svg>`;
      break;
    case 5: // Commander — pawn with small crown
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M22 44 C28 36,36 36,42 44 L42 44 C38 48,26 48,32 52 C28 52,22 50,22 44Z' />
  <circle cx='32' cy='18' r='8' />
  <!-- little crown -->
  <path d='M20 8 L24 18 L28 8 L32 18 L36 8 L40 18 L44 8 L44 14 L20 14 Z' fill='${smallStroke}' stroke='${stroke}'/>
 </g></svg>`;
      break;
    case 6: // Archer — arrow motif / arrowhead front
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M22 44 C28 36,36 36,42 44 L42 44 C38 48,26 48,32 52 C28 52,22 50,22 44Z' />
  <circle cx='32' cy='18' r='7' />
  <!-- arrow badge on torso -->
  <path d='M28 26 L36 26 L32 22 Z' fill='${smallStroke}' stroke='${stroke}'/>
 </g></svg>`;
      break;
    case 7: // Scout — streamlined with rear notch (can retreat)
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M18 44 C24 36,40 36,46 44 L46 44 C42 48,28 48,32 52 C28 52,22 50,18 44Z' />
  <circle cx='32' cy='16' r='7' />
  <!-- rear notch -->
  <path d='M10 36 C14 34,14 38,10 36 Z' fill='${smallStroke}' stroke='${stroke}'/>
 </g></svg>`;
      break;
    case 8: // Jumper — double-segmented head to imply jump
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M20 44 C26 36,38 36,44 44 L44 44 C40 48,28 48,32 52 C28 52,22 50,20 44Z' />
  <!-- double head -->
  <circle cx='28' cy='18' r='6'/>
  <circle cx='36' cy='18' r='6'/>
  <rect x='26' y='8' width='12' height='6' rx='2' fill='${smallStroke}'/>
 </g></svg>`;
      break;
    case 9: // Swapper — two-head / mirrored pawn for swapping
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g stroke='${stroke}' stroke-width='2' fill='${fill}'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M18 44 C24 36,40 36,46 44 L46 44 C42 48,26 48,32 52 C28 52,22 50,18 44Z' />
  <!-- mirrored twin heads -->
  <circle cx='24' cy='18' r='6' />
  <circle cx='40' cy='18' r='6' />
  <path d='M24 24 L40 24' stroke='${smallStroke}' stroke-width='1.6'/>
 </g></svg>`;
      break;
    default:
      svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
 <g fill='${fill}' stroke='${stroke}' stroke-width='2'>
  <ellipse cx='32' cy='52' rx='18' ry='6' />
  <path d='M20 44 C24 36,40 36,44 44 L44 44 C40 48,24 48,32 52 C28 52,22 50,20 44Z' />
  <circle cx='32' cy='18' r='8' />
 </g></svg>`;
  }

  return svgToDataUri(svg);
}

// ---------- Game logic (kept intact, extended for 9 pawn variants with modelSVG) ----------
function resetGame(){
  if(timerInterval) clearInterval(timerInterval);
  totalTime=whiteTime=blackTime=0;
  gameOver=false; selected=null; turn='white';
  promotionCallback=null;
  board = Array(8).fill(null).map(()=>Array(8).fill(null));
  info.textContent=''; backToMenuBtn.style.display='none';
  isMultiplayer = false; // reset multiplayer flag on full reset
  isCampaign = false; // stop campaign on full reset unless starting campaign flow
  campaignStatus.style.display='none';
  campaignResultButtons.style.display='none';
  // ensure draw/resign buttons visible outside campaign
  offerDrawBtn.style.display = '';
  resignBtn.style.display = '';
  offerBox.style.display = 'none';
  drawBoard();
}
function setupBoard(){
  const order=['R','N','B','Q','K','B','N','R'];
  board=Array(8).fill(null).map(()=>Array(8).fill(null));
  // assign variants to pawns:
  // white pawns: variants 1..8 (a->h)
  const whitePawnVariants = [1,2,3,4,5,6,7,8];
  // black pawns: variants 9,1,2,3,4,5,6,7 (so variant 9 exists on board)
  const blackPawnVariants = [9,1,2,3,4,5,6,7];

  for(let i=0;i<8;i++){
    board[0][i]={type:order[i],color:'black',moved:false};
    // include variant and modelSVG for each pawn
    const bVar = blackPawnVariants[i];
    const wVar = whitePawnVariants[i];
    board[1][i]={type:'P',color:'black',moved:false, leapUsed:false, variant: bVar, modelSVG: getVariantSVG(bVar,'black')};
    board[6][i]={type:'P',color:'white',moved:false, leapUsed:false, variant: wVar, modelSVG: getVariantSVG(wVar,'white')};
    board[7][i]={type:order[i],color:'white',moved:false};
  }
  turn='white'; selected=null; gameOver=false;
  drawBoard();
}

// ---------- drawBoard with orientation (and pawn badge rendering per variant or modelSVG) ----------
function drawBoard(highlights=[]){
  chessboardEl.innerHTML='';
  const rows = (playerColor === 'black') ? [7,6,5,4,3,2,1,0] : [0,1,2,3,4,5,6,7];
  const cols = (playerColor === 'black') ? [7,6,5,4,3,2,1,0] : [0,1,2,3,4,5,6,7];
  for(let dr=0; dr<8; dr++){
    for(let dc=0; dc<8; dc++){
      const r = rows[dr];
      const c = cols[dc];
      const cell=document.createElement('div');
      cell.className='cell '+((r+c)%2===0?'white':'black');
      cell.dataset.row=r; cell.dataset.col=c;
      const piece=board[r][c];
      if(piece){
        // if piece has its own modelSVG, render it (priority) otherwise use generic images
        if(piece.modelSVG){
          cell.innerHTML = `<img src="${piece.modelSVG}" alt="${piece.type}" class="piece">`;
        } else {
          cell.innerHTML = getPieceSVG(piece.type, piece.color);
        }
      }
      // add pawn badge overlay for custom look + variant color (still kept as hint)
      if(piece && piece.type==='P'){
        const badge = document.createElement('div');
        badge.className = 'pawn-badge' + (piece.leapUsed ? ' used' : '');
        const v = piece.variant || 1;
        const bg = variantBadgeColor[v] || 'rgba(30,200,180,0.95)';
        badge.style.background = bg;
        badge.title = `Pion variant ${v}`;
        cell.appendChild(badge);
      }
      for(const h of highlights){
        if(Array.isArray(h) && h[0]==r && h[1]==c){ cell.classList.add('highlight'); break; }
        if(h && typeof h==='object' && h.r==r && h.c==c){ if(h.type==='capture') cell.classList.add('capture'); else cell.classList.add('move'); }
      }
      cell.onclick = ()=> clickCell(r,c);
      chessboardEl.appendChild(cell);
    }
  }
}

function getPieceSVG(type, color){
  const url = pieceImgs[color] && pieceImgs[color][type];
  if(!url) return '';
  return `<img src="${url}" alt="${type}" class="piece">`;
}

function getMovesWithInfo(r,c){
  const raw = getMoves(r,c,true);
  return raw.map(m => ({ r:m[0], c:m[1], type: (board[m[0]][m[1]] ? 'capture' : 'move') }));
}

function clickCell(r,c){
  if(gameOver) return;
  const piece = board[r][c];
  if(selected){
    const selectedMoves = selected._moves || [];
    const canMove = selectedMoves.some(m => (Array.isArray(m) ? (m[0]==r && m[1]==c) : (m.r==r && m.c==c)));
    if(canMove){
      movePiece(selected[0],selected[1],r,c);
      selected=null; drawBoard();
      checkPromotion(r,c);
      checkCheckMateOrStalemate();
      // do NOT auto-run botMove in multiplayer mode
      if(!gameOver && !isMultiplayer && turn===botColor) setTimeout(()=>{ botMove(); },300);
      return;
    } else { selected=null; drawBoard(); return; }
  } else if(piece && piece.color===turn){
    selected=[r,c];
    const movesInfo = getMovesWithInfo(r,c);
    selected._moves = movesInfo.length>0 ? movesInfo : getMoves(r,c,true);
    drawBoard(movesInfo);
  }
}

// ---------- checkPromotion updated ----------
function checkPromotion(r,c){
  const piece = board[r][c];
  if(piece && piece.type==='P' && ((piece.color==='white' && r===0) || (piece.color==='black' && r===7))){
    if(piece.color === playerColor){
      promotionMenu.style.display='block';
      promotionCallback=(newType)=>{ 
        // when promoting, remove variant/leapUsed/modelSVG since it's now a different piece
        board[r][c].type=newType; 
        delete board[r][c].variant;
        delete board[r][c].leapUsed;
        delete board[r][c].modelSVG;
        promotionMenu.style.display='none'; 
        drawBoard(); 
      }
    } else {
      board[r][c].type = 'Q';
      delete board[r][c].variant;
      delete board[r][c].leapUsed;
      delete board[r][c].modelSVG;
      drawBoard();
    }
  }
}
promotionMenu.querySelectorAll('button[data-piece]').forEach(btn=> btn.onclick = ()=> { if(promotionCallback) promotionCallback(btn.dataset.piece); });

// ---------- timing ----------
function startTimer(){
  if(timerInterval) clearInterval(timerInterval);
  timerInterval=setInterval(()=>{
    if(turn==='white' && totalTime>0){ whiteTime--; if(whiteTime<=0){ gameOver=true; info.textContent='Przegrałeś na czas!'; backToMenuBtn.style.display='block'; onGameEnd(botColor); } }
    if(turn==='black' && totalTime>0){ blackTime--; if(blackTime<=0){ gameOver=true; info.textContent='Bot przegrał na czas!'; backToMenuBtn.style.display='block'; onGameEnd(playerColor); } }
    updateTimers();
  },1000);
}
function updateTimers(){
  function fmt(sec){const m=Math.floor(sec/60); const s=sec%60; return `${m<10?'0':''}${m}:${s<10?'0':''}${s}`;}
  whiteTimerEl.textContent='Biały: '+(totalTime>0?fmt(whiteTime):'∞');
  blackTimerEl.textContent='Czarny: '+(totalTime>0?fmt(blackTime):'∞');
}

// ---------- moves generation (EXTENDED for 9 pawn variants) ----------
function inBoard(r,c){return r>=0&&r<8&&c>=0&&c<8;}
function getMoves(r,c,checkKing=true){
  const piece=board[r][c]; if(!piece) return [];
  const moves=[]; const dir=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];
  if(piece.type==='P'){
    // Custom pawn rules per variant:
    const f = piece.color==='white'?-1:1;
    const variant = piece.variant || 1;

    function pushIfEmpty(rr,cc){ if(inBoard(rr,cc) && !board[rr][cc]) moves.push([rr,cc]); }
    function pushIfEnemy(rr,cc){ if(inBoard(rr,cc) && board[rr][cc] && board[rr][cc].color!==piece.color) moves.push([rr,cc]); }

    switch(variant){
      case 1: // Vanguard: forward 1 or 2 even if moved
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(inBoard(r+2*f,c) && !board[r+f][c] && !board[r+2*f][c]) moves.push([r+2*f,c]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        break;
      case 2: // Slider: side-step 1 or 2 squares (non-capturing)
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(inBoard(r,c-1) && !board[r][c-1]) moves.push([r,c-1]);
        if(inBoard(r,c+1) && !board[r][c+1]) moves.push([r,c+1]);
        if(inBoard(r,c-2) && !board[r][c-2] && !board[r][c-1]) moves.push([r,c-2]);
        if(inBoard(r,c+2) && !board[r][c+2] && !board[r][c+1]) moves.push([r,c+2]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        break;
      case 3: // Assassin: diagonal capture 1 or 2 forward (captures only)
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        if(inBoard(r+2*f,c-2) && board[r+2*f][c-2] && board[r+2*f][c-2].color!==piece.color) moves.push([r+2*f,c-2]);
        if(inBoard(r+2*f,c+2) && board[r+2*f][c+2] && board[r+2*f][c+2].color!==piece.color) moves.push([r+2*f,c+2]);
        break;
      case 4: // Leaper: always knight moves allowed
        [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(d=>{
          const x=r+d[0], y=c+d[1];
          if(inBoard(x,y) && (!board[x][y] || board[x][y].color!==piece.color)) moves.push([x,y]);
        });
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(!piece.moved && inBoard(r+2*f,c) && !board[r+f][c] && !board[r+2*f][c]) moves.push([r+2*f,c]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        break;
      case 5: // Commander: can move diagonally forward into empty (non-capture)
        if(inBoard(r+f,c-1) && !board[r+f][c-1]) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && !board[r+f][c+1]) moves.push([r+f,c+1]);
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        break;
      case 6: // Archer: can capture straight ahead (if enemy forward)
        if(inBoard(r+f,c) && board[r+f][c] && board[r+f][c].color!==piece.color) moves.push([r+f,c]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        break;
      case 7: // Scout: can retreat one square (backwards) if empty
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(inBoard(r-f,c) && !board[r-f][c]) moves.push([r-f,c]); // backward move
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        break;
      case 8: // Jumper: if forward square occupied, can jump to r+2f if empty
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(inBoard(r+f,c) && board[r+f][c] && inBoard(r+2*f,c) && !board[r+2*f][c]) moves.push([r+2*f,c]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        break;
      case 9: // Swapper: can swap places with adjacent friendly on same rank
        if(inBoard(r,c-1) && board[r][c-1] && board[r][c-1].color===piece.color) moves.push([r,c-1]);
        if(inBoard(r,c+1) && board[r][c+1] && board[r][c+1].color===piece.color) moves.push([r,c+1]);
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
        break;
      default:
        if(inBoard(r+f,c) && !board[r+f][c]) moves.push([r+f,c]);
        if(!piece.moved && inBoard(r+2*f,c) && !board[r+f][c] && !board[r+2*f][c]) moves.push([r+2*f,c]);
        if(inBoard(r+f,c-1) && board[r+f][c-1] && board[r+f][c-1].color!==piece.color) moves.push([r+f,c-1]);
        if(inBoard(r+f,c+1) && board[r+f][c+1] && board[r+f][c+1].color!==piece.color) moves.push([r+f,c+1]);
    }
  } else if(piece.type==='R'){dir.slice(0,4).forEach(d=>{let[x,y]=[r,c]; while(true){x+=d[0];y+=d[1]; if(!inBoard(x,y)) break; if(!board[x][y]) moves.push([x,y]); else{ if(board[x][y].color!==piece.color) moves.push([x,y]); break; }}});} 
  else if(piece.type==='B'){dir.slice(4,8).forEach(d=>{let[x,y]=[r,c]; while(true){x+=d[0];y+=d[1]; if(!inBoard(x,y)) break; if(!board[x][y]) moves.push([x,y]); else{ if(board[x][y].color!==piece.color) moves.push([x,y]); break; }}});} 
  else if(piece.type==='Q'){dir.forEach(d=>{let[x,y]=[r,c]; while(true){x+=d[0];y+=d[1]; if(!inBoard(x,y)) break; if(!board[x][y]) moves.push([x,y]); else{ if(board[x][y].color!==piece.color) moves.push([x,y]); break; }}});} 
  else if(piece.type==='N'){[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(d=>{const x=r+d[0], y=c+d[1]; if(inBoard(x,y) && (!board[x][y] || board[x][y].color!==piece.color)) moves.push([x,y]);});}
  else if(piece.type==='K'){dir.forEach(d=>{const x=r+d[0], y=c+d[1]; if(inBoard(x,y) && (!board[x][y] || board[x][y].color!==piece.color)) moves.push([x,y]);}); if(!piece.moved){ if(board[r][7] && board[r][7].type==='R' && !board[r][7].moved && !board[r][5] && !board[r][6]) moves.push([r,6]); if(board[r][0] && board[r][0].type==='R' && !board[r][0].moved && !board[r][1] && !board[r][2] && !board[r][3]) moves.push([r,2]); } }
  if(checkKing){ return moves.filter(m=>{const temp=board[m[0]][m[1]]; board[m[0]][m[1]]=piece; board[r][c]=null; const safe=isKingSafe(piece.color); board[r][c]=piece; board[m[0]][m[1]]=temp; return safe;}); }
  return moves;
}
function findKing(color){ for(let r=0;r<8;r++) for(let c=0;c<8;c++) if(board[r][c] && board[r][c].type==='K' && board[r][c].color===color) return [r,c]; return [-1,-1]; }
function isKingSafe(color){ const [kr,kc]=findKing(color); for(let r=0;r<8;r++) for(let c=0;c<8;c++){ const p=board[r][c]; if(p && p.color!==color){ const moves=getMoves(r,c,false); if(moves.some(m=>m[0]==kr && m[1]==kc)) return false; } } return true; }

// ---------- movePiece with pawn-capture sound and variant-specific effects ----------
function movePiece(sr,sc,tr,tc){ const piece=board[sr][sc]; if(!piece) return;
  const captured = board[tr][tc];
  if(captured && captured.type === 'P'){ playPawnCaptureSound(); }
  // detect castling (kept)
  if(piece.type==='K' && Math.abs(sc-tc)===2){ if(tc>sc){ board[tr][5]=board[tr][7]; board[tr][5].moved=true; board[tr][7]=null; } else { board[tr][3]=board[tr][0]; board[tr][3].moved=true; board[tr][0]=null; } }

  // Special handling for variant 9 (Swapper): if target contains friendly, perform swap instead of capture/move
  if(piece.type==='P' && piece.variant===9 && inBoard(tr,tc) && board[tr][tc] && board[tr][tc].color===piece.color){
    // swap positions
    const other = board[tr][tc];
    board[tr][tc] = piece;
    board[sr][sc] = other;
    // update moved flags
    piece.moved = true;
    if(other) other.moved = true;
    // keep their modelSVG/variant/leapUsed as-is
    turn = turn==='white'?'black':'white';
    return;
  }

  // detect if pawn made a knight leap (L-shape): set leapUsed for pawns that track it (we keep for compatibility)
  if(piece.type === 'P'){
    const dr = tr - sr;
    const dc = tc - sc;
    const absdr = Math.abs(dr), absdc = Math.abs(dc);
    if((absdr===2 && absdc===1) || (absdr===1 && absdc===2)){
      piece.leapUsed = true;
    }
  }

  board[tr][tc]=piece;
  board[sr][sc]=null;
  piece.moved=true;
  turn = turn==='white'?'black':'white';
}

// ---------- globalna funkcja oceny statycznej ----------
function evaluateStaticForColor(b, perspectiveColor){
  const values = {P:1,N:3,B:3,R:5,Q:9,K:1000};
  let score = 0;
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const p = b[r][c];
    if(!p) continue;
    const val = values[p.type] || 0;
    score += (p.color === perspectiveColor ? 1 : -1) * val;
  }
  return score;
}

// ---------- simple bot (easy/medium/hard) + hard implementation below ----------
function botMove(){
  if(gameOver) return;
  const moves=[];
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){ const p=board[r][c]; if(p && p.color===botColor) getMoves(r,c).forEach(mv=>moves.push({from:[r,c], to:mv})); }
  if(moves.length===0) return;
  let move;
  if(selectedDifficulty==='easy' || selectedDifficulty==='campaign-easy'){
    move = moves[Math.floor(Math.random()*moves.length)]; movePiece(move.from[0],move.from[1],move.to[0],move.to[1]); drawBoard(); checkPromotion(move.to[0],move.to[1]); checkCheckMateOrStalemate(); postBotActions(); return;
  }
  if(selectedDifficulty==='medium' || selectedDifficulty==='campaign-medium'){ const captures = moves.filter(m=>board[m.to[0]][m.to[1]]); move = captures.length>0?captures[Math.floor(Math.random()*captures.length)]:moves[Math.floor(Math.random()*moves.length)]; movePiece(move.from[0],move.from[1],move.to[0],move.to[1]); drawBoard(); checkPromotion(move.to[0],move.to[1]); checkCheckMateOrStalemate(); postBotActions(); return; }

  // For hard, we will use the improved hard logic (minimax depth 1 with simulated replies).
  const movesClone = [];
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){ const p=board[r][c]; if(p && p.color===botColor) getMoves(r,c).forEach(mv=>movesClone.push({from:[r,c], to:mv})); }
  if(movesClone.length===0) return;

  function cloneBoard(b){ return JSON.parse(JSON.stringify(b)); }
  function applyMoveOnBoard(b, from, to){
    const piece = b[from[0]][from[1]];
    if(!piece) return;
    if(piece.type==='K' && Math.abs(from[1]-to[1])===2){
      const row = from[0];
      if(to[1] > from[1]){
        b[row][to[1]] = piece; b[from[0]][from[1]] = null;
        b[row][from[1]+1] = b[row][7]; b[row][7] = null;
        if(b[row][from[1]+1]) b[row][from[1]+1].moved = true;
        piece.moved = true; return;
      } else {
        b[row][to[1]] = piece; b[from[0]][from[1]] = null;
        b[row][from[1]-1] = b[row][0]; b[row][0] = null;
        if(b[row][from[1]-1]) b[row][from[1]-1].moved = true;
        piece.moved = true; return;
      }
    }
    if(piece.type === 'P'){
      const targetRow = to[0];
      // if pawn promotes, turn into Q
      if((piece.color==='white' && targetRow===0) || (piece.color==='black' && targetRow===7)){
        b[to[0]][to[1]] = { type:'Q', color: piece.color, moved:true };
        b[from[0]][from[1]] = null; return;
      }
    }
    // handle swap variant in simulation: if moving pawn variant 9 onto friendly occupied, swap
    if(piece.type==='P' && piece.variant===9 && b[to[0]][to[1]] && b[to[0]][to[1]].color===piece.color){
      const other = b[to[0]][to[1]];
      b[to[0]][to[1]] = piece;
      b[from[0]][from[1]] = other;
      piece.moved = true;
      if(other) other.moved = true;
      return;
    }
    // normal move: move and keep variant/leapUsed if present
    b[to[0]][to[1]] = piece;
    b[from[0]][from[1]] = null;
    piece.moved = true;
  }
  function generateMovesOnBoard(b, color){
    const realBoard = board;
    board = b;
    const res = [];
    for(let r=0;r<8;r++) for(let c=0;c<8;c++){
      const p = board[r][c];
      if(p && p.color === color){
        const mvs = getMoves(r,c);
        mvs.forEach(mv => res.push({from:[r,c], to:mv}));
      }
    }
    board = realBoard;
    return res;
  }
  function shuffleAndTake(arr, n){
    const copy = arr.slice();
    for(let i=copy.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [copy[i],copy[j]]=[copy[j],copy[i]]; }
    return copy.slice(0,n);
  }

  let bestMove = null;
  let bestScore = -Infinity;
  const opponentColor = (botColor === 'white') ? 'black' : 'white';

  // shuffle to avoid deterministic choices
  for (let i = movesClone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [movesClone[i], movesClone[j]] = [movesClone[j], movesClone[i]];
  }

  for(const mv of movesClone){
    const b1 = cloneBoard(board);
    applyMoveOnBoard(b1, mv.from, mv.to);
    const replies = generateMovesOnBoard(b1, opponentColor);
    let minScoreAfterReply;
    if(replies.length === 0){
      minScoreAfterReply = evaluateStaticForColor(b1, botColor);
    } else {
      const repliesToConsider = replies.length > 40 ? shuffleAndTake(replies, 40) : replies;
      minScoreAfterReply = Infinity;
      for(const rply of repliesToConsider){
        const b2 = cloneBoard(b1);
        applyMoveOnBoard(b2, rply.from, rply.to);
        const score = evaluateStaticForColor(b2, botColor);
        if(score < minScoreAfterReply) minScoreAfterReply = score;
        if(minScoreAfterReply <= bestScore - 5) break;
      }
    }
    if(minScoreAfterReply > bestScore){
      bestScore = minScoreAfterReply;
      bestMove = mv;
    }
  }

  if(!bestMove) bestMove = movesClone[Math.floor(Math.random()*movesClone.length)];
  movePiece(bestMove.from[0], bestMove.from[1], bestMove.to[0], bestMove.to[1]);
  drawBoard(); checkPromotion(bestMove.to[0],bestMove.to[1]); checkCheckMateOrStalemate();
  postBotActions();
}

// ---------- post-bot logic: offer draw / resign decisions ----------
function postBotActions(){
  // evaluate position from bot's perspective
  const score = evaluateStaticForColor(board, botColor); // higher => better for bot
  // if bot is heavily losing -> resign (only outside campaign)
  if(!isCampaign && score < -8){
    // bot resigns
    gameOver = true;
    info.textContent = 'Bot poddał partię — wygrałeś!';
    backToMenuBtn.style.display='block';
    onGameEnd(playerColor);
    return;
  }
  // if position is roughly equal, small chance to offer draw (only outside campaign)
  if(!isCampaign && Math.abs(score) < 0.8){
    if(Math.random() < 0.18){ // 18% chance
      // bot offers draw
      showOfferToPlayer('Bot proponuje remis. Akceptujesz?','draw');
      return;
    }
  }
  // optionally other behaviors could be added
}

// ---------- offer UI helpers ----------
function showOfferToPlayer(text, type){
  offerText.textContent = text;
  offerBox.style.display = 'block';
  // attach handlers depending on type (here only 'draw' used)
  acceptOfferBtn.onclick = ()=>{
    offerBox.style.display='none';
    if(type==='draw'){ gameOver=true; info.textContent='Remis zaakceptowany przez Ciebie i bota.'; backToMenuBtn.style.display='block'; onGameEnd('draw'); }
  };
  declineOfferBtn.onclick = ()=>{ offerBox.style.display='none'; info.textContent='Odrzuciłeś ofertę.'; setTimeout(()=>{ info.textContent=''; }, 2000); };
}

// ---------- player actions: offer draw / resign ----------
offerDrawBtn.addEventListener('click', ()=>{
  if(isCampaign){
    info.textContent = 'W kampanii nie możesz proponować remisu.';
    setTimeout(()=>{ info.textContent=''; }, 2000);
    return;
  }
  if(gameOver) return;
  info.textContent = 'Wysłałeś ofertę remisu do bota...';
  // simulate bot thinking before responding
  setTimeout(()=>{ botRespondToPlayerOffer(); }, 700);
});

resignBtn.addEventListener('click', ()=>{
  if(isCampaign){
    info.textContent = 'W kampanii nie możesz się poddać.';
    setTimeout(()=>{ info.textContent=''; }, 2000);
    return;
  }
  if(gameOver) return;
  gameOver = true;
  info.textContent = 'Poddajesz się — przegrałeś.';
  backToMenuBtn.style.display='block';
  onGameEnd(botColor);
});

// ---------- bot response to player's offer ----------
function botRespondToPlayerOffer(){
  // evaluate position from bot's perspective (positive => good for bot)
  const score = evaluateStaticForColor(board, botColor);

  // Acceptance heuristics:
  // - if bot is losing (score < -1.5) -> accept draw (good for bot)
  // - if position is roughly equal (score between -1.5 and 1.5) -> accept draw
  // - if bot is clearly winning (score > 1.5) -> reject draw
  // You can tweak thresholds as desired
  if(score <= 1.5){
    // accept
    gameOver = true;
    info.textContent = 'Bot zaakceptował remis.';
    backToMenuBtn.style.display='block';
    onGameEnd('draw');
  } else {
    // reject
    info.textContent = 'Bot odrzucił ofertę remisu.';
    setTimeout(()=>{ info.textContent=''; }, 2000);
  }
}

// ---------- evaluateBoard used elsewhere (kept for compatibility) ----------
function evaluateBoard(){ const values={P:1,N:3,B:3,R:5,Q:9,K:1000}; let score=0; for(let r=0;r<8;r++) for(let c=0;c<8;c++){ const p=board[r][c]; if(!p) continue; score += (p.color===botColor?1:-1)*values[p.type]; } return score; }

// ---------- check mate / stalemate ----------
function checkCheckMateOrStalemate(){
  let whiteHas=false, blackHas=false;
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){ if(board[r][c] && board[r][c].color==='white' && getMoves(r,c).length>0) whiteHas=true; }
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){ if(board[r][c] && board[r][c].color==='black' && getMoves(r,c).length>0) blackHas=true; }
  const whiteInCheck=!isKingSafe('white'); const blackInCheck=!isKingSafe('black');
  if(!whiteHas && whiteInCheck){ info.textContent='Czarny wygrywa!'; gameOver=true; backToMenuBtn.style.display='block'; onGameEnd('black'); }
  else if(!blackHas && blackInCheck){ info.textContent='Biały wygrywa!'; gameOver=true; backToMenuBtn.style.display='block'; onGameEnd('white'); }
  else if(!whiteHas && !whiteInCheck){ info.textContent='Remis (pat)!'; gameOver=true; backToMenuBtn.style.display='block'; onGameEnd('draw'); }
  else if(!blackHas && !blackInCheck){ info.textContent='Remis (pat)!'; gameOver=true; backToMenuBtn.style.display='block'; onGameEnd('draw'); }
}

// ---------- campaign handling (with autosave to localStorage) ----------
function initCampaign(){
  // create 10 simple opponents (you can tune names/difficulties)
  campaignOpponents = [
    {name:'Bot 1 — Nowicjusz', difficulty:'campaign-easy'},
    {name:'Bot 2 — Uczeń', difficulty:'campaign-easy'},
    {name:'Bot 3 — Trening', difficulty:'campaign-easy'},
    {name:'Bot 4 — Sprytny', difficulty:'campaign-medium'},
    {name:'Bot 5 — Zuch', difficulty:'campaign-medium'},
    {name:'Bot 6 — Doświadczony', difficulty:'campaign-medium'},
    {name:'Bot 7 — Silniejszy', difficulty:'campaign-medium'},
    {name:'Bot 8 — Szkopuł', difficulty:'hard'},
    {name:'Bot 9 — Pretendent', difficulty:'hard'},
    {name:'Bot 10 — Mistrz lokalny', difficulty:'hard'}
  ];
  renderCampaignList();
  // check saved progress
  const saved = loadCampaignProgress();
  if(saved !== null && saved.index >= 0 && saved.index < campaignOpponents.length){
    continueCampaignBtn.style.display = '';
  } else {
    continueCampaignBtn.style.display = 'none';
  }
}

function renderCampaignList(){
  campaignList.innerHTML = '';
  for(let i=0;i<campaignOpponents.length;i++){
    const item = document.createElement('div');
    item.className = 'campaign-item';
    item.textContent = `${i+1}. ${campaignOpponents[i].name} — trudność: ${campaignOpponents[i].difficulty.replace('campaign-','')}`;
    if(i < campaignIndex) item.style.opacity = 0.5;
    campaignList.appendChild(item);
  }
  campaignProgress.textContent = `Postęp: ${campaignIndex} / ${campaignOpponents.length}`;
}

function saveCampaignProgress(){
  try{
    const data = { index: campaignIndex };
    localStorage.setItem('usz_campaign_progress', JSON.stringify(data));
    // show continue button if progress exists and not finished
    if(campaignIndex < campaignOpponents.length){
      continueCampaignBtn.style.display = '';
    } else {
      continueCampaignBtn.style.display = 'none';
    }
  }catch(e){ console.warn('localStorage save error', e); }
}

function loadCampaignProgress(){
  try{
    const raw = localStorage.getItem('usz_campaign_progress');
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){ console.warn('localStorage load error', e); return null; }
}

function clearCampaignSave(){
  try{
    localStorage.removeItem('usz_campaign_progress');
    continueCampaignBtn.style.display = 'none';
    alert('Zapis kampanii usunięty.');
  }catch(e){ console.warn('localStorage remove error', e); }
}

function startCampaign(){
  campaignIndex = 0;
  isCampaign = true;
  saveCampaignProgress();
  startOpponent(campaignIndex);
}

function continueCampaign(){
  const saved = loadCampaignProgress();
  if(saved && typeof saved.index === 'number'){
    campaignIndex = Math.max(0, Math.min(saved.index, campaignOpponents.length-1));
    isCampaign = true;
    startOpponent(campaignIndex);
  } else {
    alert('Brak zapisu kampanii.');
  }
}

function startOpponent(index){
  if(index < 0 || index >= campaignOpponents.length) return;
  isCampaign = true;
  isMultiplayer = false;
  // hide offer/dismiss buttons in campaign (UI + logic)
  offerDrawBtn.style.display = 'none';
  resignBtn.style.display = 'none';
  offerBox.style.display = 'none';
  // set difficulty for this opponent
  selectedDifficulty = campaignOpponents[index].difficulty;
  // update colors (botColor depends on playerColor)
  updateColorsFromSelection();
  // reset board and start match
  timeMenu.style.display='none';
  campaignMenu.style.display='none';
  gameBoard.style.display='block';
  setupBoard();
  info.textContent = `Walka z ${campaignOpponents[index].name} — trudność: ${selectedDifficulty.replace('campaign-','')}`;
  campaignStatus.style.display = 'block';
  campaignStatus.textContent = `Przeciwnik: ${campaignOpponents[index].name} (${index+1}/${campaignOpponents.length})`;
  campaignResultButtons.style.display = 'none';
  backToMenuBtn.style.display = 'none';
  // if bot is white and not multiplayer
  if(botColor === 'white'){ setTimeout(()=>{ if(!gameOver) botMove(); }, 300); }
}

function onGameEnd(winner){
  // winner: 'white' | 'black' | 'draw'
  // only handle campaign progression if campaign mode active
  if(!isCampaign) return;
  campaignStatus.style.display = 'block';
  campaignResultButtons.style.display = 'block';
  if(winner==='draw'){
    campaignStatus.textContent = `Remis z ${campaignOpponents[campaignIndex].name}. Możesz powtórzyć lub przejść dalej.`;
    // Do not advance index; allow retry or skip
  } else if(winner === playerColor){
    campaignStatus.textContent = `Wygrałeś z ${campaignOpponents[campaignIndex].name}!`;
    campaignIndex++;
    saveCampaignProgress();
    renderCampaignList();
    if(campaignIndex >= campaignOpponents.length){
      campaignStatus.textContent = 'Gratulacje! Ukończyłeś kampanię (Mapa 1)!';
      campaignResultButtons.style.display = 'block';
      campaignNextBtn.style.display = 'none';
      campaignRetryBtn.textContent = 'Zagraj ponownie kampanię';
      // finished: remove save so continue won't appear
      try{ localStorage.removeItem('usz_campaign_progress'); }catch(e){}
      continueCampaignBtn.style.display = 'none';
      return;
    }
  } else {
    campaignStatus.textContent = `Przegrałeś z ${campaignOpponents[campaignIndex].name}. Możesz spróbować ponownie.`;
  }
}

campaignNextBtn.addEventListener('click', ()=>{
  // proceed to next opponent
  campaignResultButtons.style.display = 'none';
  campaignStatus.style.display = 'none';
  startOpponent(campaignIndex);
});
campaignRetryBtn.addEventListener('click', ()=>{
  // replay same opponent or restart campaign if finished
  campaignResultButtons.style.display = 'none';
  campaignStatus.style.display = 'none';
  if(campaignIndex >= campaignOpponents.length){
    // restart campaign from 0
    startCampaign();
  } else {
    // retry current opponent
    startOpponent(campaignIndex);
  }
});

// ---------- menu/event wiring ----------
document.getElementById('newGameBtn').onclick = (e)=>{ e.preventDefault(); mainMenu.style.display='none'; modeMenu.style.display='block'; }
document.getElementById('optionsBtn').onclick = (e)=>{ e.preventDefault(); mainMenu.style.display='none'; optionsMenu.style.display='block'; }
document.getElementById('exitBtn').onclick = (e)=>{ e.preventDefault(); try{ window.close(); }catch(e){} }

document.getElementById('backModeBtn').onclick = ()=>{ modeMenu.style.display='none'; mainMenu.style.display='block'; }
document.getElementById('botModeBtn').onclick = ()=>{ modeMenu.style.display='none'; difficultyMenu.style.display='block'; }
document.getElementById('multiModeBtn').onclick = ()=>{ 
  // show multiplayer menu (new)
  modeMenu.style.display='none'; multiplayerMenu.style.display='block'; 
};
document.getElementById('campaignModeBtn').onclick = ()=>{ modeMenu.style.display='none'; campaignMenu.style.display='block'; };

document.getElementById('backDifficultyBtn').onclick = ()=>{ difficultyMenu.style.display='none'; modeMenu.style.display='block'; }
document.getElementById('easyBtn').onclick = ()=>{ selectedDifficulty='easy'; difficultyMenu.style.display='none'; timeMenu.style.display='block'; }
document.getElementById('mediumBtn').onclick = ()=>{ selectedDifficulty='medium'; difficultyMenu.style.display='none'; timeMenu.style.display='block'; }
document.getElementById('hardBtn').onclick = ()=>{ selectedDifficulty='hard'; difficultyMenu.style.display='none'; timeMenu.style.display='block'; }

document.getElementById('backTimeBtn').onclick = ()=>{ timeMenu.style.display='none'; difficultyMenu.style.display='block'; }

// multiplayer menu wiring
document.getElementById('randomMultiplayerBtn').onclick = ()=>{ 
  // 50% chance to be white or black
  isMultiplayer = true;
  playerColor = (Math.random() < 0.5) ? 'white' : 'black';
  // update UI selection
  if(playerColor === 'white'){ chooseWhiteBtn.classList.add('selected'); chooseBlackBtn.classList.remove('selected'); }
  else { chooseBlackBtn.classList.add('selected'); chooseWhiteBtn.classList.remove('selected'); }
  updateColorsFromSelection();
  multiplayerMenu.style.display='none';
  // go directly to time selection (no difficulty for multiplayer)
  timeMenu.style.display='block';
};
document.getElementById('localMultiplayerBtn').onclick = ()=>{
  // local manual selection — show color selection already present and go to time
  isMultiplayer = true;
  multiplayerMenu.style.display='none';
  timeMenu.style.display='block';
};
document.getElementById('backMultiplayerBtn').onclick = ()=>{ multiplayerMenu.style.display='none'; modeMenu.style.display='block'; }

// campaign menu wiring
startCampaignBtn.onclick = ()=>{ startCampaign(); };
continueCampaignBtn.onclick = ()=>{ continueCampaign(); };
resetCampaignSaveBtn.onclick = ()=>{ clearCampaignSave(); };
backCampaignBtn.onclick = ()=>{ campaignMenu.style.display='none'; modeMenu.style.display='block'; }

document.querySelectorAll('#timeMenu button[data-time]').forEach(btn=>{
  btn.onclick = ()=>{
    const t=parseInt(btn.dataset.time);
    totalTime=t*60; whiteTime=blackTime=totalTime;
    timeMenu.style.display='none'; gameBoard.style.display='block'; setupBoard(); gameOver=false; info.textContent=''; backToMenuBtn.style.display='none';
    if(totalTime>0) startTimer();
    updateColorsFromSelection();
    // if bot plays white and NOT multiplayer and NOT campaign, it should move first
    if(!isMultiplayer && !isCampaign && botColor === 'white'){ setTimeout(()=>{ if(!gameOver) botMove(); }, 300); }
  }
});

document.getElementById('musicToggleBtn').onclick = ()=>{ ensureAudioContext(); if(bgMusic.paused) { bgMusic.play().catch(()=>{}); } else { bgMusic.pause(); } };
document.getElementById('backOptionsBtn').onclick = ()=>{ optionsMenu.style.display='none'; mainMenu.style.display='block'; }
backToMenuBtn.onclick = ()=>{ gameBoard.style.display='none'; mainMenu.style.display='block'; resetGame(); }

// start
initCampaign();
resetGame();
mainMenu.style.display='block';

// ---------- audio UI ----------
bgMusic.volume = 1.0;
volumeRange.addEventListener('input', () => {
  const val = parseInt(volumeRange.value, 10);
  volumeValue.textContent = val;
  bgMusic.volume = Math.max(0, Math.min(1, val/100));
  try{ ensureAudioContext(); if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(()=>{});}catch(e){}
});
volumeValue.textContent = volumeRange.value;

trackSelect.addEventListener('change', ()=>{
  const url = trackSelect.value;
  const wasPlaying = !bgMusic.paused;
  bgMusic.src = url;
  if(wasPlaying){ ensureAudioContext(); bgMusic.play().catch(()=>{}); }
});

// =================== MULTIPLAYER CLIENT LOGIKA ===================

let ws = null;
let connected = false;
let myNick = localStorage.getItem('usz_nick') || '';
nickInput.value = myNick || '';
let currentPlayers = []; // array of nick strings
let pendingInvite = null; // {from, gameType, color}

// helper: render players list
function renderPlayers(){
  playersListEl.innerHTML = '';
  if(!connected){
    playersListEl.innerHTML = '<div style="color:#ccc;padding:8px">Brak połączenia z serwerem.</div>';
    return;
  }
  if(currentPlayers.length === 0){
    playersListEl.innerHTML = '<div style="color:#ccc;padding:8px">Brak innych graczy online.</div>';
    return;
  }
  currentPlayers.forEach(nick=>{
    // do not show yourself in list
    if(nick === myNick) return;
    const row = document.createElement('div');
    row.className = 'player-row';
    const nameSpan = document.createElement('div');
    nameSpan.className = 'player-nick';
    nameSpan.textContent = nick;
    const btns = document.createElement('div');
    // Duel button
    const duelBtn = document.createElement('button');
    duelBtn.className = 'duel-btn';
    duelBtn.textContent = 'Duel';
    duelBtn.onclick = ()=> openInviteDialog(nick);
    btns.appendChild(duelBtn);
    row.appendChild(nameSpan);
    row.appendChild(btns);
    playersListEl.appendChild(row);
  });
}

// connect/disconnect
connectBtn.addEventListener('click', ()=>{
  const nick = (nickInput.value || '').trim();
  if(!nick){ alert('Wpisz nick przed połączeniem.'); return; }
  myNick = nick;
  localStorage.setItem('usz_nick', myNick);
  connectToServer();
});
disconnectBtn.addEventListener('click', ()=>{ disconnectFromServer(); });

function connectToServer(){
  if(connected || ws) return;
  multiplayerStatus.textContent = 'Łączenie...';
  try{
    ws = new WebSocket(MULTIPLAYER_WS);
  }catch(e){
    multiplayerStatus.textContent = 'Błąd inicjalizacji WebSocket.';
    console.error(e);
    return;
  }
  ws.addEventListener('open', ()=>{
    connected = true;
    multiplayerStatus.textContent = 'Połączono';
    connectBtn.style.display = 'none';
    disconnectBtn.style.display = '';
    // join with nick
    ws.send(JSON.stringify({ type:'join', nick: myNick }));
  });
  ws.addEventListener('message', (ev)=>{
    try{
      const msg = JSON.parse(ev.data);
      handleServerMessage(msg);
    }catch(e){ console.warn('Invalid ws message', e, ev.data); }
  });
  ws.addEventListener('close', ()=>{
    connected = false;
    multiplayerStatus.textContent = 'Rozłączono';
    connectBtn.style.display = '';
    disconnectBtn.style.display = 'none';
    ws = null;
    currentPlayers = [];
    renderPlayers();
  });
  ws.addEventListener('error', (err)=>{
    console.warn('ws error', err);
    multiplayerStatus.textContent = 'Błąd połączenia z serwerem';
  });
}

function disconnectFromServer(){
  if(!ws) return;
  try{ ws.send(JSON.stringify({ type:'leave', nick: myNick })); }catch(e){}
  ws.close();
  ws = null;
  connected = false;
  multiplayerStatus.textContent = 'Rozłączono';
  connectBtn.style.display = '';
  disconnectBtn.style.display = 'none';
  currentPlayers = [];
  renderPlayers();
}

// handle messages from server
function handleServerMessage(msg){
  switch(msg.type){
    case 'players':
      // Replace full list
      currentPlayers = Array.isArray(msg.players) ? msg.players.slice() : [];
      renderPlayers();
      break;
    case 'player_join':
      if(!currentPlayers.includes(msg.nick)) currentPlayers.push(msg.nick);
      renderPlayers();
      break;
    case 'player_leave':
      currentPlayers = currentPlayers.filter(n => n !== msg.nick);
      renderPlayers();
      break;
    case 'invite':
      // incoming invite
      pendingInvite = { from: msg.from, gameType: msg.gameType || 'standard', color: msg.color || 'random' };
      showIncomingInvite(pendingInvite);
      break;
    case 'invite_response':
      // response to an invite you sent
      if(msg.accept){
        // start game (server informs both sides)
        // but we'll also wait for start_game message; optionally handle here
        multiplayerStatus.textContent = `${msg.from} zaakceptował zaproszenie. Oczekiwanie na start...`;
      } else {
        multiplayerStatus.textContent = `${msg.from} odrzucił twoje zaproszenie.`;
      }
      break;
    case 'start_game':
      // payload: { with: otherNick, colorFor: { you: 'white', other: 'black' }, time: seconds }
      startMultiplayerMatch(msg);
      break;
    default:
      console.warn('Unknown ws msg', msg);
  }
}

// Open a dialog to invite a player (choose game type/color)
function openInviteDialog(targetNick){
  inviteModal.style.display = 'block';
  inviteModal.setAttribute('aria-hidden', 'false');
  inviteText.textContent = `Wyślij zaproszenie do ${targetNick} — wybierz tryb gry:`;
  inviteOptions.style.display = 'block';
  inviteButtons.innerHTML = '';
  const standardBtn = document.createElement('button');
  standardBtn.textContent = 'Standardowa gra';
  standardBtn.onclick = ()=> {
    const chosenColor = inviteColorSelect.value || 'random';
    sendInvite(targetNick, 'standard', chosenColor);
    closeInviteModal();
  };
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Anuluj';
  cancelBtn.onclick = ()=> closeInviteModal();
  inviteButtons.appendChild(standardBtn);
  inviteButtons.appendChild(cancelBtn);
}

// show incoming invite with accept/decline
function showIncomingInvite(inv){
  inviteModal.style.display = 'block';
  inviteModal.setAttribute('aria-hidden', 'false');
  inviteOptions.style.display = 'none';
  inviteText.textContent = `Otrzymałeś zaproszenie od ${inv.from} do gry (${inv.gameType}).`;
  inviteButtons.innerHTML = '';
  const accept = document.createElement('button');
  accept.textContent = 'Akceptuj';
  accept.onclick = ()=> {
    // send response
    if(ws && connected){
      ws.send(JSON.stringify({ type:'invite_response', to: inv.from, from: myNick, accept: true, color: inv.color || 'random' }));
    }
    // wait for server to send start_game (server should coordinate colors)
    closeInviteModal();
  };
  const decline = document.createElement('button');
  decline.textContent = 'Odrzuć';
  decline.onclick = ()=> {
    if(ws && connected){
      ws.send(JSON.stringify({ type:'invite_response', to: inv.from, from: myNick, accept: false }));
    }
    pendingInvite = null;
    closeInviteModal();
  };
  inviteButtons.appendChild(accept);
  inviteButtons.appendChild(decline);
}

// close modal
function closeInviteModal(){
  inviteModal.style.display = 'none';
  inviteModal.setAttribute('aria-hidden', 'true');
  inviteText.textContent = '';
  inviteButtons.innerHTML = '';
  inviteOptions.style.display = 'none';
}

// send invite to server
function sendInvite(target, gameType='standard', color='random'){
  if(!ws || !connected){ alert('Nie jesteś połączony z serwerem.'); return; }
  ws.send(JSON.stringify({ type:'invite', to: target, from: myNick, gameType, color }));
  multiplayerStatus.textContent = `Wysłano zaproszenie do ${target} (${gameType})...`;
}

// handle start_game message coming from server — start local multiplayer match
function startMultiplayerMatch(msg){
  // msg: { with: otherNick, colorFor: { you:'white'|'black', other:'white'|'black' }, time: seconds (optional) }
  isMultiplayer = true;
  isCampaign = false;
  offerDrawBtn.style.display = ''; // multiplayer can propose draws if you want
  resignBtn.style.display = '';
  // hide server UI
  multiplayerMenu.style.display = 'none';
  mainMenu.style.display = 'none';
  timeMenu.style.display = 'none';
  campaignMenu.style.display = 'none';

  // set nick/other and colors
  const other = msg.with || (msg.other || 'opponent');
  const colorFor = msg.colorFor || { you: 'white', other: 'black' };

  playerColor = colorFor.you;
  // no bot in multiplayer
  botColor = (playerColor === 'white') ? 'black' : 'white';
  updateColorsFromSelection();

  // time if provided
  const timeSec = (typeof msg.time === 'number') ? msg.time : 0;
  totalTime = timeSec;
  whiteTime = blackTime = totalTime;

  // setup board and show UI
  gameBoard.style.display = 'block';
  setupBoard();
  info.textContent = `Gra multiplayer z ${other}. Twój kolor: ${playerColor}.`;
  backToMenuBtn.style.display = 'none';
  campaignStatus.style.display = 'none';
  campaignResultButtons.style.display = 'none';
  if(totalTime > 0) startTimer();

  // In multiplayer we DO NOT call botMove. Moves come from local player interactions.
  // Optionally, you might connect a real-time move exchange via websocket: that is not included
  // here (requires server logic and move message handling). This code prepares the local game state.

  // If you want to integrate real-time move sync:
  // - On movePiece, after making the move, send a message with move coordinates to server
  // - On receiving opponent's move message from server, apply it locally with movePiece(...)
}

// optional: attempt to update players list every few seconds if server supports it
setInterval(()=>{
  if(ws && ws.readyState === WebSocket.OPEN){
    try{ ws.send(JSON.stringify({ type:'list_request' })); }catch(e){} // server may reply with 'players'
  }
}, 8000);

// ==================== END MULTIPLAYER LOGIKA ====================

</script>
</body>
</html>
