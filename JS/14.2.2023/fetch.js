// dříve: XMLHttpRequest, AJAX

// dnes: fetch (pomocí promisů)

/*
fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => console.log(data)) */




// dnes lze i pomocí async/await. což je příjemnější zápis
async function zjistiJmenoLukaSkywalkera() {
    response = await fetch("https://swapi.dev/api/people/1")
    data = await response.json()
    let jmeno;
    jmeno = data.name;
    console.log("Jméno je " + jmeno);
}
zjistiJmenoLukaSkywalkera();

