const drivers = ["James", "Jim", "Jimm", "Jameson"]

let returnFirstTwoDrivers = function(a) {
    let b = [...a];
    return b.slice(0,2);
}

let returnLastTwoDrivers = a => {
    let b = [...a];
    return b.slice(-2)
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

let fareMultiplier = function(a) {
    return a * a;
}

let fareDoubler = a => {
    return a * 2;
}

let fareTripler = a => {
    return a * 3;
}

function createFareMultiplier(a) {
    return fareMultiplier;

}

function selectDifferentDrivers(a, b) {
    return b(a); 
}

console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers ))

// Code your solution in this file!
console.log(returnFirstTwoDrivers(drivers));

console.log(returnLastTwoDrivers(drivers));

console.log(createFareMultiplier(4));

