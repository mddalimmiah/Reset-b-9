/*

1. var, let , const 
2. Default Parameter:
3. Template string:
4. Arrow function
5. Destructuring and spread operator
6. object.keys and object.values es6 hocche object.entries
7. for of loop (used in array and string)
8. for in loop (used in object)

*/

const a =54;

const numbers=[24, 48, 5];

const person={
    name:'Dalim',

}
// template string
const message =` Hi i am ${person.name} has a ${a} access ${numbers[2]}`
console.log(message);

// arrow function 
const squire=x => x*x;

const sum=(a,b)=> a+b;

console.log(sum(5,7));
// destructuring

//  বাম পাশে যেইটা দিবো  ্ওইটা বাদ দিয়ে নতুন করে কপি হবে ...দিয়ে যে নাম দিবো সেই নামের ভিতর
const {z, ...others} = {x:5, y:6, z:10, name:'dalim', age:30};

console.log(others);

//  array destructuring: 

const [first, second, ...newName] = ['safi', 'sidrat', 'dalim', 'farjana', 'muntaha'];

console.log(newName);