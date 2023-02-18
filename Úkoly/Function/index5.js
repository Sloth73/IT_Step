// Function that checks that passed number is perfect

let sum = 1
function perfectNumber(n) {
    for (let i = 2; i <= n/2 ; i++) {
        if (n % i === 0) {
                sum += i 
            }
            
        }
    if (sum === n && n != 0) {
        console.log("Passed number is perfect");
    }
    else {
        console.log("Number is not perfect");
    }
}
console.log(perfectNumber(28));
console.log(perfectNumber(0));
console.log(perfectNumber(1003));
