// event handler
function handleEvent() {
    alert("Bylo na mě kliknuto...");
}

let h1 = document.querySelector("h1");

h1.onclick = handleEvent;

let h2 = document.querySelector("h2");

h2.onmousemove = function() {
    h2.style.backgroundColor = "red";
    h2.style.fontSize = "38px";
}

h2.onmouseleave = function() {
    h2.style.backgroundColor = "";
    h2.style.fontSize = "";
}

// pozor, přemaže minulý event handler
// ona jsou uloženy ve stejné proměnné
// a proměnná může mít v sobě jen jednu věc
h2.onmousemove = function() {
    h1.style.backgroundColor = "green";
}