/*
objective: write a function to give me some of all numbers in an array

*/

function sumOfNumbers(numbers){
    // console.log(numbers)
    let sum=0;
    for(let number of numbers){
        // console.log(number)
        sum +=number;
        
    }
    return sum;}

const numbs=[10, 20, 10, 20, 40, 50, 300]
const result=sumOfNumbers(numbs);
console.log('sum of numbers is:',result)