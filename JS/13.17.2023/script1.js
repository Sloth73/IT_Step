// event handler
function handleEvent() {
    alert("Bylo na mě kliknuto...");
}

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

//h1.addEventListener("click", handleEvent);
/*h1.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});*/

//document.addEventListener("click", handleEvent);


let darkModeButton = document.querySelector(".dark-mode-toggle");

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkModeButton.textContent = "Vypnout dark mode";
    } else {
        darkModeButton.textContent = "Zapnout dark mode";
    }
});

