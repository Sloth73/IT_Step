//Canvas background style
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);


//Snake style
const snakeSize = 50;
let snakePositionX = 0;
let snakePositionY = canvas.height/2 - snakeSize/2

ctx.fillStyle = 'black';
ctx.fillRect(snakePositionX, snakePositionY, snakeSize, snakeSize);