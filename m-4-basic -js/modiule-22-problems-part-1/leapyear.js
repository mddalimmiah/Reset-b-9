function isLeapYear(year){
    if(year % 4===0){
        return true;
    }
    else{
        return false;
    }
}
const year=isLeapYear(2006);
// console.log(year)

function isLeapYear2(year){
    if(year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if(year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap=isLeapYear2(2100)
const isLeap2=isLeapYear2(2400)
const isLeap3=isLeapYear2(1900)
const isLeap4=isLeapYear2(2052)

console.log("2100", isLeap, '2400', isLeap2, '1900', isLeap3, '2052', isLeap4)
