//Functioon that takes length and width of reactangle a calculates area, if just 1 parameter is passed, calculates square 

let result
function rect(a, b) {
    if (a > 0 && b > 0) {
        result = a * b;
    }
    else if (b === 0) {
        result = a ** 2;
    }
    else {
        result = b ** 2;
    }
    return result;
}
console.log(rect(2, 5));
console.log(rect(4, 2));
console.log(rect(0, 9));
console.log(rect(3, 0));

