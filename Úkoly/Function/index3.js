//Function that combines three separete digits

function combine(a, b, c) {
    let firstNumber = a.toString();
    let secondNumber = b.toString();
    let thirdNumber = c.toString();
    if (a < 0 || b < 0 || c < 0) {
        console.log("Put only real numbers above 0");
    }
    else {
        let combineNumber = firstNumber + secondNumber + thirdNumber;
        return combineNumber;
    }
}
console.log(combine(1, 2, 3));
console.log(combine(-2, 0, 1));
console.log(combine(3, 2, 3));
console.log(combine(0, 0, 3));