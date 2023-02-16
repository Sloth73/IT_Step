pes = {
    jmeno: "Rex",
    rasa: "vlčák",
    kouse: true,
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

console.log(pes.jmeno);

pes.kousani()

function pozdrav() {
    console.log("ahoj");
}

