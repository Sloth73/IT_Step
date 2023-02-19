//Event listener
document.addEventListener('keydown', whichKey)

//Canvas background style
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Snake style
const snakeSize = 50;
let snakeSpeed = 5;
let snakePositionX = 0;
let snakePositionY = canvas.height/2 - snakeSize/2

function gameCycle() {

    moveWithSnake();
    drawEverything();
   

    requestAnimationFrame(gameCycle);
}

gameCycle()

//Moving with snake
function moveWithSnake() {

    //snakePositionX += snakeSpeed

    if (snakePositionX > canvas.width) {
        snakePositionX = 0
    }
   
}
//Drawing everything
function drawEverything() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(snakePositionX, snakePositionY, snakeSize, snakeSize);
}

//Keyboard
function whichKey(event) {
    switch(event.key) {
        case 'ArrowUp':
            snakePositionY -= snakeSpeed;
            break;
        case 'ArrowDown':
            snakePositionY += snakeSpeed;
            break;
        case 'ArrowLeft':
            snakePositionX -= snakeSpeed;
            break;
        case 'ArrowRight':
            snakePositionX += snakeSpeed;
            break;
    }
    
}