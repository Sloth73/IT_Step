const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

// stroke, fill 

ctx.fillStyle = "red";
ctx.strokeStyle = "brown";
ctx.lineWidth = 10;

//ctx.fillRect(10, 10, 200, 140);
//ctx.strokeRect(10, 10, 200, 140);

ctx.lineWidth = 7;
ctx.strokeStyle = "red";
//ctx.beginPath();
//ctx.moveTo(50, 50);
//ctx.lineTo(150, 150);
//ctx.stroke();
/*
ctx.moveTo(100, 100);
ctx.lineTo(200, 150);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.fill();*/

ctx.beginPath();
let x = 100;
let y = 350;
let vyskaSchodu = 30;
let sirkaSchodu = 40;
ctx.moveTo(x, y);
for (let i = 0; i < 6; i++) {
    y = y - vyskaSchodu;
    ctx.lineTo(x, y);
    x = x + sirkaSchodu;
    ctx.lineTo(x, y);
}
ctx.lineTo(x, 350);
ctx.stroke();
ctx.fill();


