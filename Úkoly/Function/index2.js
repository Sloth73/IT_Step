//Function that calculate factorial of a number. 

function fact(a) {
    let result = a
    if (a === 0 || a === 1) {
        return 1;
    }
    else if (a < 0) {
        return "Insert positive number"
    }
    
   for (i = a - 1; i > 0; i--) {
        result *= i;
        return result
    
   }
}
console.log(fact(5));
console.log(fact(3));
console.log(fact(4));



