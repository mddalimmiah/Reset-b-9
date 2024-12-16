const difference=(x,y) => x-y;

const multiply=(x, y) => x *y;

// single or one parameter:
const getAge=(person) => person.age; //return key word na thakle bole implicit:

const student={name:'dalim', age:30,}

const age=getAge(student);
console.log(age)

const getThird=numbers => numbers[2];

const third=getThird([12, 23, 45, 60]);
console.log(third)
// single parameter a bracket na dile o hobe:: সিঙ্গেল প্যারামিটার  bracket না দিলেও হবে। bracket dile valo
const doubleIt=num => num*2;

console.log(doubleIt(12))

// no parameter:


const getPI= ()=> Math.PI;

console.log(getPI());

// large arrow function: 
// multiple line arrow function  হলে রিটার্ন কী ওয়ার্ড দিয়ে রিটার্ন করতে হবে। 
const doMath=(x, y, z) => {

    const sum=x+y+z;
    const diff= sum - z;
    const multiply= x*y*z;
    const result =multiply + diff;
    return result;
}

const math=doMath(2, 4, 5);
console.log(math)