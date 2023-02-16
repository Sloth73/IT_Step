let druhaH1 = document.querySelector(".druha");

function zmenBarvuPozadi() {
    const prvniH1 = document.querySelector(".prvni");
    prvniH1.style.backgroundColor = "purple";
}

let jineId = setTimeout(zmenBarvuPozadi, 2000);

let id = setInterval(blikani, 1000);

function blikani() {
    druhaH1.hidden = !druhaH1.hidden;
}

console.log(id, jineId);

setTimeout(() => clearInterval(id), 10000);

let button = document.querySelector("button");

button.onclick = () => clearTimeout(jineId);