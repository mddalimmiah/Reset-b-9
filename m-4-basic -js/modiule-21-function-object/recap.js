function add(price1, price2){
    const total=price1 + price2;
    return total;
}

function add2(price1, price2){
    return price1 + price2;
}

const bill=add(5, 80);

const bill2=add2(5, 80);

console.log('bill1:', bill,  'Bill2:',bill2);

function doMath(num1, num2){
    const sum=num1 + num2;
    const diff=sum - num2;
    const multiPly= sum * diff;
    const result=multiPly / 3;
    return result;
}

const result= doMath(2, 3);
console.log(result)