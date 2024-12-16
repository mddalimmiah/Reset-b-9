/*
strongly typed Language:

int a =5;
string b ='this is string type data';
bool c =true;
object student ={name: 'this is name', id:12};
int[] numbers =[12, 24, 50];
string[] friends =['dalim', 'safi','sidrat'];

 অন্য ল্যাংগুয়েজে টাইপ বলে দিতে হয় জাভাস্ক্রিপ্ট এ বলে দিতে হয় না। 
*/

// js dynamic type Language

// primitive type data
const a =5;
const b='this is string name: is';
const d =true;

// non primitive
const ages=[12, 30, 50];
const student ={id:2, name:'Dalim'};

console.log(typeof a, typeof b, typeof d, typeof ages, typeof student)

let x =5;
let y=x;

console.log(x, y);
y=7; //value ta k reassign kora hoyece
console.log(x, y)

let p ={job:'font end developer'};
let q=p;

console.log(p, q);

// q={job:'backend end'};
q.job='backend end'; //2 টাতেই পরিবর্তন হয়ে যাবে কারণ অবজেক্ট,  েএ্রারে নন-প্রিমিটিভ তারা ডাটা পরিবর্তন করলে ২ টাতেই রেফার করে দেয়।
console.log(p, q);