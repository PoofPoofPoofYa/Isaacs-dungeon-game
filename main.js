const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let gameStarted = false;

const player1 = {x: 100, y: 500, color:'#0ff', speed: 5, width:30, height:30};
const player2 = {x: 700, y: 500, color:'#f0f', speed: 5, width:30, height:30};

const keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

document.getElementById('start-game').addEventListener('click', () => {
    document.getElementById('home-screen').style.display = 'none';
    canvas.style.display = 'block';
    gameStarted = true;
    requestAnimationFrame(gameLoop);
});

function movePlayers() {
    // Player 1 WASD
    if(keys['w']) player1.y -= player1.speed;
    if(keys['s']) player1.y += player1.speed;
    if(keys['a']) player1.x -= player1.speed;
    if(keys['d']) player1.x += player1.speed;

    // Player 2 IJKL
    if(keys['i']) player2.y -= player2.speed;
    if(keys['k']) player2.y += player2.speed;
    if(keys['j']) player2.x -= player2.speed;
    if(keys['l']) player2.x += player2.speed;
}

function drawPlayers() {
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

    ctx.fillStyle = player2.color;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
}

function gameLoop() {
    if(!gameStarted) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePlayers();
    drawPlayers();

    requestAnimationFrame(gameLoop);
}
