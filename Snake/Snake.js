//Canvas background style
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Snake style
const snakeSize = 50;
let snakeSpeed = 5;
let snakePositionX = 0;
let snakePositionY = canvas.height/2 - snakeSize/2

function gameCycle() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(snakePositionX, snakePositionY, snakeSize, snakeSize);

    requestAnimationFrame(gameCycle);
}

gameCycle()