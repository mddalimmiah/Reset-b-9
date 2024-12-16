/* map: ম্যাপ একটা  এ্র্যারেতে লুপ চালায়, এবং আমি যে ফাংশন টা প্রত্যেকটা উপাধান এর উপর চালাবে, ফাংশন থেকে যে এ্যারেটা আসবে নিজে ইন্টারনাল এ্যারেতে রাখবে এবং রেজাল্ট যে টা আসবে ঔইটা একটা এ্যারেতে রাখবে।
*/

const numbers=[4, 5, 2, 8, 10];
function doubledIt(num){
    console.log('num now:', num)
    return num*2;
}
const double2=n=> n*2;
const result=numbers.map(doubledIt);
const result2=numbers.map(double2);

const output2=numbers.map(n=> n * 2); //n hocce parameter second ta n * 2 ta result ja return korbe
console.log('output2:', output2)
// console.log(result);
// console.log(result2);

// const doubled=[];

// for(const num of numbers){
//     const double=num*2;
//     doubled.push(double);
// }
// console.log(doubled);