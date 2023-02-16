// Function that takes two nubers and returns -1 if a < b, 1 if a > b, 0 if a = b. 

function ratio (a,b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(ratio(4,5));
console.log(ratio(5,4));
console.log(ratio(5,5));


