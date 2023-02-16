console.log("Working");

let pocetNavstev = 4;
let ucet = "Premium"
if (pocetNavstev > 2) {
    console.log("Dobrý den, jsme rádi, že jste zpět");
    console.log("Už jste u nás byl " + pocetNavstev + " krát.");
    if (pocetNavstev > 5 && (ucet === "Premium")) {
        console.log("Letenka do Vídně stojí 5 000,- Kč.");
    }
    else {
        console.log("Letenka do Vídně stojí 20 000,- Kč.");
    }
} else {
    console.log("Vítejte a dovolte, abychom Vám představili naši společnost");
    console.log("Pouze dnes, letenky do Vídně za 4 000,- Kč.");
}