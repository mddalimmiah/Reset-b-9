const age=35;
const price=100000;

if(age<=12){
    console.log("you can eat free");
}
else if(age>=60){
    // 50% discount
    const discount=price *50/100;
    const payAmount=price-discount;
    console.log(payAmount);
}
else if(age>=50){
    // 25% discount
    const discount=price * 25/100;
    const payAmount=price- discount;
    console.log(payAmount);
}
else if(age>=30){
    // 10% discount
    const discount=price * 10/100;
    const payAmount=price- discount;
    console.log(payAmount);
}
else{
    console.log(price)
}