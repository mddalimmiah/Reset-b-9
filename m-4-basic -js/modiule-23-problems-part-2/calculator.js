function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation==='add'){
        const result=add(a, b);
        return result;
    }
    else if(operation==='substract'){
        const result=substract(a, b);
        return result;
    }
    else if(operation==='multiply'){
        const result=multiply(a, b);
        return result;
    }
    else if(operation==='divide'){
        return divide(a, b);
    }
    else {
        return "onle 'add;, 'substrat', 'multiply', 'divide', allowed";
    }
}

const calculate=calculator(8, 7, 'multiply');
console.log(calculate)