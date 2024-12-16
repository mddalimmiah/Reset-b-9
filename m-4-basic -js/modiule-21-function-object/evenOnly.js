function evenNumbers(numbers){
    console.log(numbers)
    let even=[];
    for(let num of numbers){
        // console.log(num)
        if(num % 2===0){
            even.push(num)
        }
     
    }
    return even;
}

const numbs=[1, 3, 2, 4, 60, 20, 35, 33, 86, 34, 23];

// const result=evenNumbers(numbs);

// console.log("only even numbers are :", result)

function sumOfEvenNumbers(numbers){
    // console.log(numbers)
   let sum=0;
    for(const number of numbers){
        // console.log(number)
        if(number %2===0){
          sum=number+sum;
        }
    }
    return sum;
}
const nums=[12,1, 23, 45, 30, 20, 50, 40, 60]
const sum=sumOfEvenNumbers(nums);
console.log('sum of even number :', sum)