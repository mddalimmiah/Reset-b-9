// array and object non primitive tara reference pathay tai 2ui jaigay aki value set hoye jay
const person={
    name:'dalim',
    age:30,
    isMarried:true,
    address:{
        city:'dhaka',
    },
}

// const person2=person;
const person2={...person};

person2.phone='01777658456';

console.log(person2, person);

// const {age}=person;
const {age:myAge}=person;
// console.log(age)
console.log(myAge)

const {age, address, ...rest}=person;

console.log(age, address.city, rest)