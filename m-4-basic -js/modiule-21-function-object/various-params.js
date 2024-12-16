function evenSizedString(str){
    const size=str.length;
    console.log(str, size)
    if(size % 2===0){
        console.log('even size str')
        return true;
    }
    else{
        console.log("odd size str")
        return false;
    }
}
evenSizedString('Dhaka')
const result=evenSizedString('Dalim miah');
console.log(result)

function doDoubleTripple(number, doDouble){
    if(doDouble===true){
        const result=number *2;
        return result;
    }
    else{
        const result=number *3;
        return result;
    }
}
console.log(doDoubleTripple(10, true))
console.log(doDoubleTripple(5, false))
// array

function numberElemets(numbers){
    const len=numbers.length;
    return len;
}
console.log(numberElemets([12, 23, 34, 45, 50, 30]));

// object

function objectElements(person){
    const age=person.age;
    return age;
}
