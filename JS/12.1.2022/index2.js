let cislo1 = prompt("Zadejte první číslo");
let cislo2 = prompt("Zadejte druhé číslo");

cislo1 = Number(cislo1);
cislo2 = Number(cislo2);

let vysledek1 = cislo1 + cislo2; 
let vysledek2 = cislo1 - cislo2;
let vysledek3 = cislo1 * cislo2;
let vysledek4 = cislo1 / cislo2;

console.log("Součet čísel je " + vysledek1);
console.log("Rozdíl čísel je " + vysledek2);
console.log("Součin čísel je " + vysledek3);
console.log("Podíl čísel je " + vysledek4);