
// arguments

function sum(a, b, c){
    // আরগুমেন্ট পেতে হলে শুধু ফাংশন এর ভিতরে দেখতে পাবো কনসল করে।
    console.log(arguments); //কি কি আরগুমেন্ট দিছি তা দেখাবে প্যারামিটার দিছি ৩ টা আরগুমেন্ট দিছি তিনটার বেশি
    // আরগুমেন্ট এ্যারে লাইক অবজেক্ট (এ্যারে না)

    const args=[...arguments]; //array te niye jawer jonno
    console.log(args)
    const result=a+b+c;
    return result;
}
// console.log(arguments) //habi jabi onk jinish asbe
// const total=sum(2, 4, 6); //arguments
const total=sum(2, 4, 6, 10, 20, 30); //arguments এখানে প্যারামিটিার যেই কয়টা দিছি আরগুমেন্টস এ সে কয়টার রেজাল্ট দেখাবে বাকিগুলোর দেখাবে না।

console.log(total);

console.log( typeof sum) //  সাম একটা ফাংশন দেখার জন্য 
console.log(sum.length); // ফাংশন এর পরে . লেন্থ দিলে ফাংশনে কয়টা প্যারামিটার আছে তা দিবে।