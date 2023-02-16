const time = {
    hours: 15,
    minutes: 24,
    seconds: 30
};

function padDigits(number) {
    let numberString = String(number);
    numberString = numberString.padStart(2, "0");
    return numberString;
}

function showTime(actualTime) {
    let timeString = "";
    let hours = actualTime.hours;
    hours = String(hours);
    hours = hours.padStart(2, "0");
    timeString += hours;
    timeString += ":";
    timeString += String(actualTime.minutes).padStart(2, "0");
    timeString += ".";
    timeString += padDigits(actualTime.seconds);
    return timeString;
}
console.log(showTime(time));
console.log(showTime({hours: 18, minutes: 56, seconds: 15}));
console.log(showTime({hours: 2, minutes: 1, seconds: 8}));


const changeHours = (timeObject, hours) => {
    timeObject.hours += hours;
    while (timeObject.hours >= 24) {
        timeObject.hours -= 24;
    }
    while (timeObject.hours <= 24) {
        timeObject.hours += 24
    }
    console.log(showTime(timeObject));
    return timeObject;
};

const changeMinutes = (timeObject, minutes) => {
    timeObject.minutes += minutes;
    while (timeObject.minutes >= 60) {
        timeObject.minutes -= 60;
        changeHours(timeObject, 1);
    }
    while (timeObject.minutes < 0) {
        timeObject.minutes += 60;
        changeHours(timeObject, -1);
    }
    console.log(showTime(timeObject));
    return timeObject;
};
