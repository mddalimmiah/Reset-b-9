function inchToHeight(inch){
    const feet=inch /12;
    return feet;
}

const height=inchToHeight(75);
console.log("height:", height)

function inchToHeight2(inch){
    const feetFraction=inch /12;
    const feetNumber=parseInt(feetFraction);
    const feetRemaing=inch %12;
    const result =feetNumber +' feet ' +  feetRemaing  + ' inch ';
    return result;
}
const height2=inchToHeight2(75);
console.log("height:", height2)

function milesToKm(mile){
    const km= mile * 1.60934;
    return km;
}
console.log(milesToKm(100));

function kilometerToMiles(km){
    const miles=km *0.621371;
    return miles;
}
console.log(kilometerToMiles(100))