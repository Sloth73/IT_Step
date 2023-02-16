console.log("working!");

const pritomniStudenti = ["Tomáš", "Vlado", "Martin", "Petr", "Jana"];
console.log("První studnt je:");
console.log(pritomniStudenti[0]);

console.log("Třetí student je:");
console.log(pritomniStudenti[2]);

console.log("Celkový počet studentů je:");
console.log(pritomniStudenti.length);

console.log("Poslední student je:");
console.log(pritomniStudenti[pritomniStudenti.length - 1]);

for (let i = 0; i < pritomniStudenti.length; i++) {
    console.log("Zdravím studenta se jménem: " + pritomniStudenti[i]);
}

const cenyPiva = [21, 22, 23, 24, 20, 19, 35];
for (let i = 0; i < cenyPiva.length; i++) {
    document.write("<p>Den číslo " + (i + 1) + ".");
    document.write(" Pivo stojí " + cenyPiva[i] + " Kč.</p>");
    
}