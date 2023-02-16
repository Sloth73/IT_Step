/* let pocetCyklu = prompt("Zadejte počet cyklů");
let i = 0;

while (i < pocetCyklu) {
    i++;
    console.log("#");
} */

/* let pocetCyklu = prompt("Zadejte počet cyklů");
pocetCyklu = Number(pocetCyklu);

while (pocetCyklu > 0) {
    pocetCyklu--;
    console.log(pocetCyklu);
} */

let cislo = prompt("Zadejte číslo");
let mocnina = prompt ("Zadeje mocninu");
let i = 0;
let vysledek;

cislo = Number(cislo);
mocnina = Number(mocnina);

while (i < mocnina) {
    i++;
    vysledek = cislo ** i;
    console.log(vysledek)
}
