console.log("working");

for (let i = 0; i < 7 ; i++) {
    console.log("Ahoj");
}

for (let i = 0; i <= 10; i++) {
    console.log("Aktuální hodnota proměnné i je " + i);
}

let index = 0;
while (index < 7) {
    index++;
    if (index === 2) {
        continue;
    }
    console.log("Ahoj");
    if (index === 5) {
        break;
    }
}

while (true) {
    heslo = prompt ("Zadej heslo");
    console.log("Zadal jsi " + heslo);
    if (heslo === "opice") {
        break;
    }
} 