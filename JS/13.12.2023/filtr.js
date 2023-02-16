const array = [7, 8, 10, 3, 65, 87, 1, 2, 17, 32, 2];
function filterLessThanFive(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (element < 5) {
            newArray.push(element);
        }
        
    }
    return newArray;
}
console.log(filterLessThanFive(array));