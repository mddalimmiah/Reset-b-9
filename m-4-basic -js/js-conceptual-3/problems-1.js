//  আমার কাছে একটা এ্যারে আছে তার মধ্যে থেকে বড় নাম্বার বের করাতে হবে?

// const numbers=[10, 12, 1, 23, 34, 43, 50, 60 ];

// let biggest=numbers[0];
// for(let i=1; i<=numbers.length; i++){
//     console.log("current number is:", numbers[i], 'biggest number is:', biggest)
//    if(numbers[i]>biggest){
//     biggest=numbers[i]
    
//    }
//    console.log("current biggest:", biggest)
// }
// console.log("after  loop biggest number is:", biggest)

function getbiggestNumber(array){
  if(!Array.isArray(array)){
    return 'please provide an array' 
  }
    let biggest=array[0];
    for(let i=1; i<array.length; i++){
        if(array[i]>biggest){
            biggest=array[i];
        }
    }
    return biggest;
}
// const nums=[12, 20, 30, 40, 50, 60, 100, 200, 300, 5000, 10000];
const nums='dalim';

const big=getbiggestNumber(nums);
console.log(big)