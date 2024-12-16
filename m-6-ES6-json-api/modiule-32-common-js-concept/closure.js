// function stopWatch(){

// }

function kitchen(){

    let roast=0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer=kitchen();

console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());


function stopWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const stopWatch1=stopWatch();
const stopWatch2=stopWatch();
console.log(stopWatch1())
console.log(stopWatch1())
console.log(stopWatch2())
console.log(stopWatch2())

﻿

