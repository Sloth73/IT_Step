let obsah = ". ".repeat(600);

let hriste = document.querySelector("#hriste");
let mic = document.getElementById("mic");

hriste.insertAdjacentText("beforeend", obsah);

function pohniMicem(event) {
    //console.log("Kliknuli sme na hřiště");
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);
    let souradniceHriste = event.currentTarget.getBoundingClientRect()
    console.log(souradniceHriste)
    console.log("souřadnice kliku", event.clientX, event.clientY);
    console.log("DOMRect", souradniceHriste.left, souradniceHriste.top)
    let micZleva = event.clientX - souradniceHriste.left
     - hriste.clientLeft - mic.clientWidth / 2;
    let micSeshora = event.clientY - souradniceHriste.top
       - hriste.clientTop - mic.clientHeight / 2;
    console.log("před podmínkami", micZleva, micSeshora);
    if (micZleva < 0) {
        micZleva = 0;
    }
    if (micSeshora < 0) {
        micSeshora = 0;
    }
    if (micZleva + mic.clientWidth > hriste.clientWidth) {
        micZleva = hriste.clientWidth - mic.clientWidth;
    }
    if (micSeshora + mic.clientHeight > hriste.clientHeight) {
        micSeshora = hriste.clientHeight - mic.clientHeight;
    }
    console.log("finální souřadnice", micZleva, micSeshora);
    mic.style.left = micZleva + "px";
    mic.style.top = micSeshora + "px";
}


hriste.addEventListener("mousemove", pohniMicem);

