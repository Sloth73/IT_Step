const pes = {
    jmeno: "Ťapka",
    barva: "bílá",
    "délka srsti": "krátkosrstá",
    rasa: "Pitbull"
};

console.log(pes.jmeno);
console.log(pes.barva);
console.log(pes["délka srsti"]);
console.log("Při složitějším klíči (s diakritikou, případně s mezerou, či speciálním znakem) se musí používat vyvolání přes závorkovou notaci");

pes["výška"] = "48 cm";
console.log(pes["výška"]);

pes["kouše"] = false;
console.log(pes["kouše"]);

const pes2 = {
    jmeno: "Azor",
    barva: "černá",
    "délka srsti": "dlouhosrstý",
    rasa: "jezevčík",
    "výška": "24 cm",
    "kouše": true
};

const pes3 = {
    jmeno: "Gyros",
    barva: "hnědá",
    "délka srsti": "středně-dlouhosrstý",
    rasa: "bernardýn",
    "výška": "77 cm",
    "kouše": false
};

const psi = [pes, pes2, pes3];

console.log(psi[1].jmeno, psi[2].barva);

pes["kamarádi"] = [pes2, pes3];
console.log(pes["kamarádi"]);
console.log(pes["kamarádi"][0].barva, pes["kamarádi"][1].rasa);

console.log(Object.keys(pes));
console.log(Object.values(pes));
console.log(Object.entries(pes));



