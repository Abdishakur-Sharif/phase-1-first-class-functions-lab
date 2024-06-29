const returnFirstTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function (){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2);
}
returnLastTwoDrivers();

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer){
    return function(){
        return (`${integer}` * 5);
    }
}
createFareMultiplier(5);

const fareDoubler = function(fare){ 
    return fare * 2
}
fareDoubler(10);

const fareTripler = function(fare){
    return fare * 3
}
fareTripler(12);

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
