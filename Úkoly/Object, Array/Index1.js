//Write an object and display function. Then function that count time needed to overcome input distance

const car = {
    manufacturer : "Mazda",
    model : "6",
    year : " 2018",
    avrSpeed : 95
}
function displayInfo() {
    console.log(car);
}
// n stand for input distance
function countTime(n) {
    let speed = car.avrSpeed;
    let time = n / speed;
    return time
}
console.log(countTime(200));