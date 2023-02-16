let cislo1 = prompt("Zadejte své roční příjmy:");
let cislo2 = prompt("Zadejte své roční výdaje:");
let cislo3 = prompt("Zadejte daňovou sazbu v %");

cislo1 = Number(cislo1);
cislo2 = Number(cislo2);
cislo3 = Number(cislo3/100);

let zisk = cislo1 - cislo2;
let dan = cislo3 * zisk;

console.log("Váš zisk je: " + zisk + " ,- Kč");
console.log("Vaše daně činí: " + dan + " ,-Kč");