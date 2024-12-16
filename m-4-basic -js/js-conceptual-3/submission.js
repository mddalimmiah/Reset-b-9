function borjatriCost(peoples){
    const bus=50;
    const micro=15;
    const rikshawCost=20;
    const remainingAfterBus=peoples % bus;
    // return remainingAfterBus;
    const remainingAfterMicro=remainingAfterBus % micro;
    // return remainingAfterMicro;
    const rikshawaCost=remainingAfterMicro * rikshawCost;
    return rikshawaCost;
}


function getJob(info){
    if(typeof info !=='object'){
        return 'provide object'
    }
    let totalMarks= info.honors + info.hsc;
    if(info.isFfamily===true){
        totalMarks=totalMarks + (totalMarks *0.2);
        // return Marks;
        console.log(totalMarks)
    }
    if(info.isFfamily && totalMarks>=80){
        return 'ahobatija chakri is yours..congratualtions you got job'
    }
    else if(info.isFfamily && totalMarks<80){
        return 'badluck try next time:'
    }
    else if(!info.isFfamily && totalMarks>=80){
        return 'you got the job'
    }
    else if(!info.isFfamily && totalMarks<80){
     
        return 'rajakar rajakar...'
    }

    console.log(totalMarks)
    return totalMarks;
}

function borjatriCost(peoples){
    const bus=50;
    const micro=15;
    const rikshawCost=20;
    const remainingAfterBus=peoples % bus;
    // return remainingAfterBus;
    const remainingAfterMicro=remainingAfterBus % micro;
    // return remainingAfterMicro;
    const rikshawaCost=remainingAfterMicro * rikshawCost;
    return rikshawaCost;
}

function countBooleanArray(array){

    if(!Array.isArray(array)){
        return 'please provide valid array';
    }
    let count=0;
    for(const item of array){
        if(typeof item==='boolean'){
            count++;
        }
    }
    return count;
}

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

function createEmail(info){
    if(typeof info !=='object'){
        return 'invalid object'
    }
    const result= info.name +'@'+ info.age +'.com';
    return result;
}