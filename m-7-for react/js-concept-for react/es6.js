const numbers=[12, 30, 40, 50, 60];

const student={
    name:'Dalim',
    age:30,
    id:1,
    profession:'Web developer',

}
// 1. template string:
const about=`

my name is ${student.name}. my age is ${student.age}, my profession ${student.profession}
`;

console.log(about)

// 2. arrow function

// single parameter:

const getFiftyFive=() => 55;

// 3. spread operator:

// create a new array from an older array add an element:

const newArray= [...numbers, 55, 100];

console.log(numbers)
console.log(newArray)