let posledniX;

const obdelnik = document.querySelector(".orange");

obdelnik.addEventListener("mousedown", function(event) {
    posledniX = event.clientX;
    document.body.addEventListener("mousemove", zmenDelku);
});

function zmenDelku(event) {
    if (event.buttons === 0) {
        document.body.removeEventListener("mousemove", zmenDelku)
    } else {
        let vzdalenost = event.clientX - posledniX;
        let novaDelka = Math.max(20, obdelnik.offsetWidth + vzdalenost);
        obdelnik.style.width = novaDelka + "px";
        posledniX = event.clientX;
    }
}


