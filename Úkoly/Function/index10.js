// Function that find the gratest devisor of two numbers

function grtstDev(a, b) {
    let divisor;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            divisor = i;
        }    
    }
    return divisor;
    
}
console.log(grtstDev(10, 20));
console.log(grtstDev(8, 12));
console.log(grtstDev(15, 20));