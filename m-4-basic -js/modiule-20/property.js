const person={
    name:'Dalim',
    age:30,
    profession:'developer',
    salary:30000,
    isMarried:true,
    hasBaby:true,
    'fab places':['coxsbazar', 'bandarbnan', 'koakata'],

}

console.log(person.profession)
// dot notation
const income=person.salary;
console.log(income)

// bracket notation
// third bracket diye korte hobe

const boyos=person['age'];

console.log(boyos)

console.log(person["fab places"])