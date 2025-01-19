// forEach, map, find, filter, reduce

const numbers=[12, 20, 30, 40, 30, 50];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);

// }

// forEach

// const x=(item) => console.log(item);

// numbers.forEach((item)=>{
//     console.log(item)
// })
// const res=numbers.forEach((item)=>{
//     console.log(item)
// })

// console.log(res) //undefined dibe ca forEach kono kisu return korte pare na

// react a amra map use korbo

// const result=numbers.map((item)=> item *2)
// console.log(result);

// const result=  `
// my numbers are ${numbers.forEach((item)=> item)}
// `;
const result=  `
my numbers are ${numbers.map((item)=> item *2).join(' ')} 
`; //join diye coma ta remove korci join string a add kore

// console.log(result) forEach a undefined asbe karon forEach return korte pare na

console.log(result)

// find

// const res=numbers.find((item) => item >20)
// console.log(res)
const res=numbers.filter((item) => item >20)
console.log(res)
// reduce
const total=numbers.reduce((previous, current) => previous + current, 0);
console.log(total)

const product=[
    {price:1},
    {price:2},
    {price:3},
    {price:6},
]

const totalPrice=product.reduce((previous, current) => previous + current.price,0)
console.log(totalPrice)