document.getElementById("mainHeader").innerHTML = "Changed header";
document.getElementsByTagName("p")[1].innerHTML = "Changed paragraph";

let lastParagraph = document.getElementsByTagName("p")[4];
lastParagraph.style.color = "#fff";
lastParagraph.style.border = "1px solid black";
lastParagraph.style.padding = "10px";
lastParagraph.style.backgroundColor = "black";
lastParagraph.style.display = "inline-block";
lastParagraph.style.fontSize = "25px";
lastParagraph.style.fontStyle = "Italic";

let firstParagraph = document.querySelector("p");
let secondParagraph = document.getElementsByTagName("p")[1];
let thirdParagraph = document.getElementsByClassName("paragraphThree");
let fourthParagraph = document.getElementById("fourth");

let h1  = document.body.firstChild.nextSibling;
console.log(h1.previousSibling);

document.getElementById("mainHeader").remove;









