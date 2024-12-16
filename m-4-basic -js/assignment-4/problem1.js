/*
Problem-01 : Tax Calculator
⚠️ Function Name Must be calculateTax()
হারুণ একজন সফল হোটেল ব্যবসায়ী। তার হোটেল টি অনেক জনপ্রিয় হয়ে উঠছে  এবং মাসের শেষে তার আয় ও খরচের একটি পরিস্কার ধারণা থাকা খুবই গুরুত্বপূর্ণ। তার মাসিক আয় এবং খরচ থেকে সঠিক ট্যাক্স ক্যালকুলেট করতে তাকে সাহায্য করার জন্য তুমি একটি ফাংশন তৈরি করবে।
তোমার ফাংশনটি দুটি ইনপুট নিবে:
মাসিক আয় - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক আয়কে প্রকাশ করে।
মাসিক খরচ - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক খরচকে প্রকাশ করে।
ফাংশনটি আয় এবং খরচের পার্থক্যের ২০% হিসাব করবে এবং তা ট্যাক্স হিসেবে রিটার্ন করবে।

Input :  
প্রথম ইনপুট:  একটি পজিটিভ সংখ্যা যা মাসিক আয়। (0<=income )
দ্বিতীয় ইনপুট: একটি পজিটিভ সংখ্যা যা মাসিক খরচ।  (0<=expense )
Income সবসময় expense থেকে সমান বা  বেশি হবে।  (income >=expense)


Output :   ফাংশনটি ক্যালকুলেটেড ট্যাক্স রিটার্ন করবে। Output দশমিক সংখ্যা ও হতে পারে।


Challenge 📢 : যদি কোনো ইনপুট পজিটিভ সংখ্যা না হয় , অথবা expense এর পরিমান যদি  income এর থেকে বেশি হয় তাহলে  "Invalid Input"  স্ট্রিং  রিটার্ন করবে। 


Hints 💡:  income 10000 টাকা এবং expense 3000 টাকা হলে তাঁর আয় এবং খরচের পার্থ্যক্য হবে 
10000-3000 = 7000 টাকা।  সুতরাং তার ট্যাক্স হবে (7000 * .20)  =1400  টাকা।  

*/

function calculateTax(income, expenses) {
   if(typeof income !=='number' || typeof expenses !=='number'){
    return 'Invalid Input';
   }
    else if(income<=expenses){
    return 'Invalid Input'
   }
   else if(income<0 || expenses<0){
    return 'Invalid Input'
   }
    const totalIncome=income - expenses;
    const totalTax=totalIncome* 0.20;
    return totalTax;

}

const result=calculateTax(6000, -1500)
console.log(result)
