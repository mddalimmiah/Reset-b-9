/*

first 100 --> 100
second 101-200 --> 90

above --> 70
*/

function layeredDiscountedPrice(quantity){

    const first100Price=100;
    const second100Price=90;
    const above200Price=70;
    if(quantity<=100){
        const total=quantity * first100Price;
        return total;
    }
    else if(quantity <=200){
        const first100Total=100 * first100Price;
        const remainingQuantity= quantity - 100;
        const remainingTotal=remainingQuantity * second100Price;
        const total=first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total=100 * first100Price;
        const second100Total= 100 * second100Price;
        const remainingQuantity=quantity - 200;
        const remainingTotal=remainingQuantity * above200Price;
        const total=first100Total + second100Total + remainingTotal;
        return total;
    }
}

const total=layeredDiscountedPrice(201);
console.log("layerd discounted Price:", total)