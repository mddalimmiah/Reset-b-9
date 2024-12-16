
// function declaration:
// function add(a, b){
//     const result=a +b;
//     return result;

// }
function add(a, b){
    return a+b;

}

// function expression (function  টা কে ভ্যারিএবল এ ডিক্লেয়ার করা ই ফাংশন এক্সপ্রেশন)
const add2=function(a, b){
    return a+b;
}

// arrow function :  এ্যারো ফাংশন এ একটা ভ্যারিএবল এ ডিক্লেয়ার করতে হয় আর  এর ফাংশন টা থাকেনা শুধু প্যারমিটার থাকে, আর রিটার্ন  পরিবর্তে প্যারমিটিার যা করতে বলা হবে তা করতে হবে। 
const add3=(a, b) => a+b;

const add4=(a, b, c,d) => a+b+c+d;

const multiply=(num1, num2) => num1 * num2;
const sum=add(45, 50);
const sum2=add3(145, 50);
const sum3=add4(1, 2, 3,4);
console.log(sum, sum2, sum3)

const multi=multiply(4, 5);
console.log(multi)

