function multiply(num1, num2){

    if(typeof num1 !=='number' || typeof num2 !=='number'){
        return 'please provide number'
    }
    const mult=num1 * num2;
    return mult;
}
const result=multiply(10,  20); 
console.log(result);

function fullName(first, second){
    if(typeof first !=='string'){
        return 'first name should be string'
    }
    else if(typeof second !=='string'){
        return 'second name should be string'
    }
    const full=first +' '+ second;
    return full;
}
const fullN=fullName('5', "5");
console.log(fullN)

function getPrice(product){
    if(typeof product !=='object'){
        return 'provide an object'
    }
    const price=product.price;
    return price;
}

// const price=getPrice({name:'chulkanir dandi', price:40, color:'black'});
const price=getPrice('5')
console.log(price)

function getSecond(numbers){
    // console.log(Array.isArray(numbers))
    if(Array.isArray(numbers)===false){
        return 'please provide an array'
    }
    const number=numbers[1];
    return number;
}
// const num=getSecond([12,23, 4, 5]);
const num=getSecond(10);
console.log(num)