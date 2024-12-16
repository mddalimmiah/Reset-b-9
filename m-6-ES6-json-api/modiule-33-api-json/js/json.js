const user={id:1, name:'Dalim', job:'developer'};

// json: means  javascript object notation (JSON)
const stringified=JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/*

{ id: 1, name: 'Dalim', job: 'developer' } //js
{"id":1,"name":"Dalim","job":"developer"} JSON

*/

const shop={
    owner:'Safi',
    address:{
        street:'tb gate, mohakhali',
        city:'Dhaka',
        country:'Bangladesh',
    },
    products:['Laptop', 'Desktop', 'Printer', 'Monitor'],
    revenue:45000,
    isOpen:true,
    isNew:false,
};

console.log(shop);
const shopJson=JSON.stringify(shop); //call koarr jonno

console.log(shopJson);

// json  ‍কনভার্ট করে ‍ স্ট্রিং  এবং পার্স নাম্বার

const shopObj=JSON.parse(shopJson);
console.log(shopObj)