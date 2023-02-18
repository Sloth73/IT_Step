const fraction = {
    1 : 2,
    3 : 4
};
function addProperty(a, b) {
    a = a.toString();
    let value = b;
    fraction.a = value;
    return fraction;
}

console.log(addProperty(5, 9));