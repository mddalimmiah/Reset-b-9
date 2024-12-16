// object destructuring: 

const actor={
    name:'dalim',
    age:30, 
    phone:'01777658456',
    money:1234567,

}
// if right side an object {} left side of destructuring will be object as well ( destructuring  বাম পাশে ও অবজেক্ট হবে ডান পাশে ও অবজেক্ট হবে)

// const {phone} =actor; // destructuring a sodo left side er object a  কোন টা আউটপুট এ চাচ্ছি তা দিলেই হবে যেমন: const {phone} =actor; আমরা অবজেক্ট এর প্রপার্টি ভ্যালু ব্যবহার করছি ফোন একটা অবজেক্ট এর প্রপার্টি ভ্যালু টা ই আউটপুটে দিবে।
// const {phone, age, name} =actor;
const {phone, age: boyos, name} =actor; // object er vitore property name change kora hoyece:
// const phone=actor.phone;
// const age=actor.age;
// const money=actor.money;
console.log(name)
console.log(boyos)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
// console.log(money)
// console.log(age)
// console.log(money)
// console.log(age)
// console.log(money)
console.log(name)

// array destructuring:

const numbers=[45, 99];

const [first, second] =numbers;
const [x, y] =[12, 24] //  x=12, y=24;

// advance:

function doubleThem(a, b){

    return [a*2, b*2];
    
}

const [prothom, ditio] =doubleThem(6, 9);
console.log(prothom, ditio);