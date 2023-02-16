/*window.addEventListener("keydown", function (event) {
    if (event.key === "f") {
        document.body.style.backgroundColor = "purple";
    } /*else if (event.key === "s") {
        document.body.style.backgroundColor = "";
    }*/
});

window.addEventListener("keyup", function (event) {
    if (event.key === "f") {
        document.body.style.backgroundColor = "";
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === " " && event.ctrlKey) {
        console.log("Pokračujeme...");
        console.log(event);
    }
});

window.addEventListener("click", function(event) {
        console.log(event);
});*/

window.addEventListener("keyup", function (event) {
    if (event.key === "f") {
        document.body.style.backgroundColor = "";
    }
});
