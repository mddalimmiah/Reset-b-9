
// default: if value is not provided, take this as a  default value;  যদি কোন মান দেয়া না হয় তাহলে ডিফল্ট যা দেয়া থাকবে ঔই মান নেবে।
function add(num1 =2, num2 =0){  //default value = 2, 0 deya hoyece

    const result=num1 + num2;

    console.log(num1, num2, result);
    return result;
}

// const sum=add(5, 7);
// const sum=add(5);
const sum=add();
console.log(sum);
//  

//  example of default value;

function fullName(firstName, lastName=''){
    const fullN=firstName + ' ' + lastName;
    return fullN;
}
const result=fullName('dalim')
console.log(result);

function friends(numbs=[]){ //default value empty array hobe 

}

// object
function person(human={}){
    
}