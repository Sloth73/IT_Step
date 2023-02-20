//Event listener
document.addEventListener('keydown', whichKey);

//Canvas background style
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const header = document.querySelector('h1');

//Snake 
const snakeSize = 50;

let snakeSpeed = snakeSize;

let snakePositionX = 0;
let snakePositionY = canvas.height/2 - snakeSize;

let movingOnX = 0;
let movingOnY = 0;

let tail = [];
let snakeLength = 2;

//Food position
let foodPositionX = 0;
let foodPositionY = 0;

//Tile count
const tileCountX = canvas.width / snakeSize;
const tileCountY = canvas.height / snakeSize;

//Score
let score = 0;

//Running the game
function gameCycle() {

    moveWithSnake();
    drawEverything();
   
    setTimeout(gameCycle, 1000/15);
}
resetFoodPosition()
gameCycle()

//Moving with snake
function moveWithSnake() {

    snakePositionX += snakeSpeed * movingOnX;
    snakePositionY += snakeSpeed * movingOnY;

    //Wall collision
    if (snakePositionX > canvas.width - snakeSize) {
        snakePositionX = 0;
    }
    if (snakePositionX < 0) {
        snakePositionX = canvas.width;
    }
    if (snakePositionY > canvas.height - snakeSize) {
        snakePositionY = 0;
    }
    if (snakePositionY < 0) {
        snakePositionY = canvas.height;
    }
    //Food collision
    if (snakePositionX === foodPositionX && snakePositionY === foodPositionY) {
        score ++
        header.textContent = score;
        snakeLength ++
        resetFoodPosition();
    }

    //tail
    tail.push({x:snakePositionX, y:snakePositionY});

    //Snake length
    tail = tail.slice(-1 * snakeLength);
}
//Drawing everything
function drawEverything() {

    //Draw Canvas
    drawRectangle(0, 0, canvas.width, canvas.height, 'lightgray');
    
    //Draw grid
    drawGrid();

    //Draw tail
    tail.forEach(snakePart => 
        drawRectangle(snakePart.x, snakePart.y, snakeSize, snakeSize, 'gray'))

    //Draw snake
    drawRectangle(snakePositionX, snakePositionY, snakeSize, snakeSize, 'black');

    //Draw food
    drawRectangle(foodPositionX, foodPositionY, snakeSize, snakeSize, 'red');

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

//Draw rectangle
function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

//Draw grid
function drawGrid() {
    for (let i = 0; i < canvas.width / snakeSize; i++) {
        for (let index = 0; index < canvas.height / snakeSize; index++) {
            drawRectangle(snakeSize * i, snakeSize * index, snakeSize - 1, snakeSize - 1, 'white');
        } 
    }           
}

//Reset food position
function resetFoodPosition() {
        foodPositionX = (Math.floor(Math.random() * tileCountX) * snakeSize);
        foodPositionY = (Math.floor(Math.random() * tileCountY) * snakeSize);
    
}

