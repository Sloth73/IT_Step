const oblibenePredmety = ["Matika", "Fyzika", "Chemie", "Informatika", "Biologie"];
console.log(oblibenePredmety[0]);
console.log(oblibenePredmety[2]);
console.log(oblibenePredmety[oblibenePredmety.length - 1]);
console.log(oblibenePredmety.push("Tělocvik"));
console.log(oblibenePredmety[oblibenePredmety.length - 1]);
console.log(oblibenePredmety.unshift("Telefon"));

for (let i = 0; i < oblibenePredmety.length; i++) {
    console.log(oblibenePredmety[i]);
}
console.log(oblibenePredmety.length);
oblibenePredmety.pop();

for (let i = 0; i < oblibenePredmety.length; i++) {
    console.log(oblibenePredmety[i]);
}

const cenyChleba = [39, 44, 45, 43, 49, 51, 38];

for (let i = 0; i < cenyChleba.length; i++) {
    console.log(cenyChleba[i]);
}
for (let i = 0; i < cenyChleba.length; i++) {
    console.log(cenyChleba[i] * 1.15);
}
