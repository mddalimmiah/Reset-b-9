// truthy:

//  true, {} , [], "string", 5

// falsy: 0, null, undefined, '', 

// ternary

// number to string

const number=55;
console.log(number)
console.log(number +'')

// string to number

const string='500';

console.log(+string)

let isActive=true;

const displayUser=() => console.log('display user')
const hideUser=() => console.log('hide user')
// if && left side is true then right side is execute:
//  isActive? displayUser() : hideUser();

//  isActive && displayUser();

// if || left side is false then right side is check and execute
 isActive || hideUser();

// toggle boolean korar jonno
isActive=!isActive;
