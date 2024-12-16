const disha=56;
const salman=95;

if(disha>salman){
    console.log("disha will get strawberry");
}
else{
    console.log('salman will get strawberry');
}

function getMax(number1, number2){
    if(number1>number2){
        return number1;
    }
    else{
        return number2;
    }
}
const max1=getMax(96, 190)
const max2=getMax(56, 99);
const ultimateMax=getMax(max1, max2);

// console.log('the biggest number is:', max1, ultimateMax);
console.log('the biggest number is:', ultimateMax);