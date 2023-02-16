
const pes = {
    jmeno: "Alík",
    barva: "hnědou",
    popisMe: function() {
        return `Jmenuju se ${this.jmeno} a mám barvu ${this.barva}.`;
    }
}

const kocka = {
    jmeno: "Micka",
    barva: "bílou",
    popisMe: function() {
        return `Jmenuju se ${this.jmeno} a mám barvu ${this.barva}.`;
    },
    popisPsaPomociObjektuKocka: pes.popisMe
}

console.log(pes.popisMe());
console.log(kocka.popisMe());

const popisPsa = pes.popisMe.bind(pes);

console.log(popisPsa());

console.log(kocka.popisPsaPomociObjektuKocka());

console.log(kocka.popisPsaPomociObjektuKocka.call(pes));
console.log(kocka.popisPsaPomociObjektuKocka.apply(pes));

let prase = 10;

function popisPrase() {
    console.log(prase);
}