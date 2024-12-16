// create a function with parameter
// give me a function odd average:

function oddAverage(numbers){
// console.log(numbers)
const odds=[];
for(const number of numbers){
    // console.log(number)
    if(number % 2===1){
        // console.log(number)
        odds.push(number)
    }
}
// push j korci odd gola dekhar jonno console log korlam
// console.log(odds)
let sum=0;
for(const odd of odds){
    // console.log(odd)
    sum = sum+odd;
}
const count=odds.length;
console.log(sum, count)
const avg=sum/count;
return avg;
}

const numbers=[12, 10, 5, 23, 35, 36, 20, 410, 50,  27, 19, 29,49, 37, 60, 181];

const avg=oddAverage(numbers);
console.log('the odd average is:',avg);