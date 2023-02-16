// čtvrtá verze, víceméně syntaktický cukr nad prototypy, takhle se to píše dnes

class Pes {
    constructor(jmeno, rasa, kousu) {
        //this = {}; automaticky díky "new"
        this.jmeno = jmeno;
        this.rasa = rasa;
        this.kousu = kousu;
        //return this; automaticky díky "new"
    }

    necoOMe() {
        return `Jsem ${this.rasa} ${this.jmeno} a ${this.kouse ? "" : "ne"}koušu.`
    }

    kousani() {
        if (this.kouse) {
            return "Roztrhal jsem ti kalhoty."
        } else {
            return "Já jsem hodnej, nic takovýho neumím."
        }
    }
}

const pes2 = new Pes("Fík", "bernardýn", false);
console.log(pes2)
console.log(pes2.necoOMe());