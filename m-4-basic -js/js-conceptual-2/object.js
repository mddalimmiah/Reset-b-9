const person={
    name:'md. Dalim miah',
    Address:'mohakhali tb gate',
    mobile:'01777658456',
    old:'tb gate',
};
person.age=30,
delete person.old
console.log(person)
console.log(person.mobile)

const key =Object.keys(person);
const value =Object.values(person);

console.log(key, value)
// console.log(value)
console.log(person['Address'])