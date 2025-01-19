console.log(1)
console.log(2)
// setTimeout(()=> {
//     console.log(3)
// })
setTimeout( () => {
    console.log(3)
}, 2000)
// setimeOut  একবার এক্সিকিউট হয়।
console.log(4)
console.log(5)
console.log(6)
let num=0;
const clockId=setInterval(() => {
num++;
if(num > 6){
    clearInterval(clockId)
}
// clearInterval(clockId) // count off hoye jabe
console.log(clockId,num)
}, 2000)

// setInterval dile নাম্বার কাউন্ট হয়ে চলতে থাকবে তা বন্ধ করার জন্য clearInterval(clockId) ( ব্রাউসারে লিখতে হবে)