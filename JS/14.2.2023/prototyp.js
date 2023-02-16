// třetí verze, takhle se psal kód před rokem 2015

function Pes(jmeno, rasa, kousu) {
    this.jmeno = jmeno;
    this.rasa = rasa;
    this.kousu = kousu;
}

Pes.prototype.necoOMe = function() {
    return `Jsem ${this.rasa} ${this.jmeno} a ${this.kouse ? "" : "ne"}koušu.`
};

Pes.prototype.kousani = function() {
    if (this.kouse) {
        return "Roztrhal jsem ti kalhoty."
    } else {
        return "Já jsem hodnej, nic takovýho neumím."
    }
};

const pes2 = new Pes("Fík", "bernardýn", false);
console.log(pes2)
console.log(pes2.necoOMe());