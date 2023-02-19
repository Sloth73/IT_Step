//Event listener
document.addEventListener('keydown', whichKey)

//Canvas background style
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Snake 
const snakeSize = 50;

let snakeSpeed = 50;

let snakePositionX = 0;
let snakePositionY = canvas.height/2 - snakeSize/2

let movingOnX = 0
let movingOnY = 0

//Running the game
function gameCycle() {

    moveWithSnake();
    drawEverything();
   
 
    setTimeout(gameCycle, 1000/15);
}

gameCycle()

//Moving with snake
function moveWithSnake() {

    snakePositionX += snakeSpeed * movingOnX
    snakePositionY += snakeSpeed * movingOnY

    if (snakePositionX > canvas.width) {
        snakePositionX = 0;
    }
    if (snakePositionX < -snakeSize) {
        snakePositionX = canvas.width;
    }
    if (snakePositionY > canvas.height) {
        snakePositionY = 0;
    }
    if (snakePositionY < -snakeSize) {
        snakePositionY = canvas.height;
    }
}
//Drawing everything
function drawEverything() {
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < canvas.width / snakeSize; i++) {
            for (let index = 0; index < canvas.height / snakeSize; index++) {
                ctx.fillStyle = 'white';
                ctx.fillRect(snakeSize * i, snakeSize * index, snakeSize - 1, snakeSize - 1);
            }
            
        }
    ctx.fillStyle = 'black';
    ctx.fillRect(snakePositionX, snakePositionY, snakeSize, snakeSize);
}

//Keyboard
function whichKey(event) {
    switch(event.key) {
        case 'ArrowUp':
            if (movingOnY != 1) {
            movingOnY = -1;
            movingOnX = 0;
            }
            break;
        case 'ArrowDown':
            if (movingOnY != -1) {
            movingOnY = 1;
            movingOnX = 0;
            }
            break;
        case 'ArrowLeft':
            if (movingOnX != 1) {
            movingOnX = -1;
            movingOnY = 0;
            }
            break;
        case 'ArrowRight':
            if (movingOnX != -1) {
            movingOnX = 1;
            movingOnY = 0;
            }
            break;
    }
    
}