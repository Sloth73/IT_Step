/* function pozdrav() {
    console.log("Ahoj!");
}

pozdrav();
pozdrav();
pozdrav();

function pozdrav2(jmeno1, jmeno2, jmeno3) {
    console.log("Dobrý den " + jmeno1);
    console.log("Dobrý den " + jmeno2);
    console.log("Dobrý den " + jmeno3);
}

pozdrav2("Honzo", "Petře", "Vlasto")

function nasobeni(cislo1, cislo2) {
    let vysledek = cislo1 * cislo2;
    return vysledek;
}

let nasobek = nasobeni(2, 5);
console.log("Vysledek je " + nasobek);
let nasobek2 = nasobeni(1, 4);
console.log("Vysledek je " + nasobek2);
let nasobek3 = nasobeni(4, 8);
console.log("Vysledek je " + nasobek3);

let nasobek4 = nasobeni(8, 7);
let nasobek5 = nasobeni(5, 6);

let nasobek45 = nasobeni(nasobek4, nasobek5);
console.log("Vysledek nasobení je " + nasobek45);

function pocitani(cislo1, cislo2, operace) {
    if (operace === "sčítání") {
        let vysledek1 = cislo1 + cislo2;
        return vysledek1;
    }
    else if (operace === "odčítání") {
        let vysledek2 = cislo1 - cislo2;
        return vysledek2;
    }
    else if (operace === "násobení") {
        let vysledek3 = cislo1 * cislo2;
        return vysledek3
    }
}

let soucet = pocitani(3, 5, "sčítání");
console.log("Součet čísel je " + soucet);
let odecet = pocitani(8, 4, "odčítání");
console.log("Součet čísel je " + odecet);
let nasobenicko = pocitani(2, 3, "násobení");
console.log("Součet čísel je " + nasobenicko); */



    function pocitani(cislo1, cislo2, operace) {
        if (operace === "sčítání") {
            let vysledek1 = cislo1 + cislo2;
            return vysledek1;
        }
        else if (operace === "odčítání") {
            let vysledek2 = cislo1 - cislo2;
            return vysledek2;
        }
        else if (operace === "násobení") {
            let vysledek3 = cislo1 * cislo2;
            return vysledek3
        }
    } 
    
    while(true) {
        let cislo1 = prompt("Zadejte první číslo");
        let cislo2 = prompt("Zadejte druhé číslo");
        operace = prompt("Zadejte požadovanou operaci");
        let soucet = pocitani(cislo1, cislo2, "sčítání");
        console.log("Součet čísel je " + soucet);
        let odecet = pocitani(cislo1, cislo2, "odčítání");
        console.log("Rozdíl čísel je " + odecet);
        let nasobenicko = pocitani(cislo1, cislo2, "násobení");
        console.log("Součin čísel je " + nasobenicko);
        if (operace === "0") {
            break;
        }
    }

