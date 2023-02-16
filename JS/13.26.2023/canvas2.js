
const ctx = document.querySelector("#canvas").getContext("2d");

ctx.translate(200, 200);

function drawCircle() {
    ctx.beginPath();
    ctx.lineWidth = 30;
    ctx.strokeStyle = "purple";
    //ctx.fillStyle = "violet";

    ctx.arc(0, 0, 100, 0, Math.PI * 2);
    ctx.stroke();
    //ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 31;
    ctx.strokeStyle = "blue";
    ctx.arc(0, 0, 100, 7 * Math.PI / 4, Math.PI / 4);
    ctx.stroke();
}

drawCircle();

setInterval(() => {
    ctx.rotate(.01);
    drawCircle();
}, 10);
