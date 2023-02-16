// první příklad, nedává smysl

function tovarnaNaPsy(jmeno, rasa, kouse) {
    return {
        jmeno: jmeno,
        rasa: rasa,
        kouse: kouse,
        necoOMe: function() {
            return `Jsem ${this.rasa} ${this.jmeno} a ${this.kouse ? "" : "ne"}koušu.`
        },
        kousani: function() {
            if (this.kouse) {
                return "Roztrhal jsem ti kalhoty."
            } else {
                return "Já jsem hodnej, nic takovýho neumím."
            }
        }
    }
}

pes1 = tovarnaNaPsy("Azor", "jezevčík", false);
console.log(pes1)
console.log(pes1.necoOMe())
