console.log("Working!");

function obdelnik (a, b) {
    return 2 * (a + b);
}

console.log(obdelnik(2,8));

function obsah (r) {
    return Math.PI * (r ** 2);
}
console.log(obsah(1));

function prumer (a, b, c) {
    return (a + b + c)/3
}
console.log(prumer(3, 1, 2));

function vyssiCislo (a, b) {
     if (a > b) {
        return a
     }
     else {
        return b;
     }
}
console.log(vyssiCislo(3, 5));

let pivo = ("        Radegast je moje nejoblíbenější pivo   ");
pivo = pivo.trim()
console.log(pivo.trim());

console.log(pivo.startsWith("Radegast"));

pivo = pivo.toUpperCase();
console.log(pivo);

console.log(pivo.length);

function vypisCisel (a, b) {
    if (a < b) {
        for (i = a; i <= b; i++) {
        console.log(i)
        }
    }
    else if (a > b) {
        for (i = a; i >= b; i--) {
        console.log(i)
        }
    }   
}
vypisCisel(4, 9);
vypisCisel(5, 8);
vypisCisel(9, 4);

const predmety = ["pero", "rohlík", "auto", "plyšový medvídek", "květináč"];
console.log(predmety.indexOf("plyšový medvídek"));
console.log(predmety.includes("plyšový medvídek"));
console.log(predmety.lastIndexOf("plyšový medvídek"));


