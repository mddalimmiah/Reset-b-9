/*
 কতভাবে আনডিফাইন্ড ডাটা পাওয়া যায় = ৮ ভাবে
 
 8 ways undefined : 

 1. variable that is not initialized will give undefined ( ভ্যারিএবল  এ মান না দিলে)
 2. function with no return (will give undefined)( ফাংশন রিটার্ন না করলে)
 3. parameter that is not passed will be undefined( প্যারামিটিার পাস না করলে আনডিফাইন্ড দিবে)
 4. if return nothing on the right side will  return undefined (রিটান করলে রিটান কি করবে ঠিক ভাবে না দিল আনডিফাইন্ড দিবে)
 5. property does not exit on an object that will give you undefined( অবজেক্ট এ প্রপার্টি না থাকলে ঔইটা খুজলে আনডিফাইন্ড দিবে)
 6. accessing array elements outside of the index range: (একটা এ্যারেতে যাদ ইনডেক্স না থাকে ঔইটা খুজলে আনডিফাইন্ড দিব
 7. deleting element an array (এ্যারে থেকে কোন কিছু ডিলেট দিয়ে ডিলেট করা যাবে না  তাহলে আনিডিফাইন্ড দিব)
 8. set a value directly to undefined 
 */
let first;

function second(a, b){
    const total=a+b;
}

console.log(first); //undefined 

const result=second(2, 4);
console.log(result); //return kora hoyni tai undefined

function add(a, b, c,d){
    const total=a + b +c +d;
    console.log(a, b, c,d);
}

add(5, 7) //sob gola parameter pass kora hoyni tai undefined

function noNegaitive(a,b){
    if(a<0 || b<0){
        return 
    }
    else{
        return a+b;
    }
}

const negative=noNegaitive(5, -7)
console.log(negative) //negative songha deyar karone undefined (karon return a  bola hoyni ki return korbe tai undefined)

const fifth={id:4, name:'fifth', price:40}

console.log(fifth.id, fifth.salary)

const numbers=[12, 3, 4, 5, 6];
// we should not use it:
delete numbers[1] //undefined dibe 

console.log(numbers)

const eighth=undefined; //do not use it (if use will give undefined)

const nine=null; //  কোন কিছু না থাকলে নাল ব্যবহার করবো। ( আনডিফাইন্ড ব্যবহার করবো না।)

const data={result:[], update:null};

console.log( 'undefined:', typeof undefined)
console.log( 'null', typeof null)

