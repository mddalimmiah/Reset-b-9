/*

আপনার মাসিক খরচ, ঘরভাড়া ৫০০০ টাকা, মাসিক খাবার খরচ ৩০০০ টাকা, 
মাসিক হাত খরচ ২০০০ টাকা হলে মাস শেষে  আপনার আয়ের উপর ভিত্তি করে সেভিংস কত টাকা হবে।

*/

function getIncome(income){
    if(typeof income !=='number'){
        return 'invalid input'
    }
    const houseRent=5000;
    const mealCost=3000;
    const handExpenses=2000;
    const totalExpenses=houseRent + mealCost + handExpenses;
    if(totalExpenses >income){
        return 'earn more...'
    }
    const savings= income - totalExpenses;
    return savings;
}

const result=getIncome(5000);
console.log(result)
