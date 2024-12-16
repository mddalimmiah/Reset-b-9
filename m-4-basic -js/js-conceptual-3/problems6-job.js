//  2jon chakri parthi er moday k select hobe tar program tarmodday freedom fighters er alada benifited pabe:

const person1={
    name:'Dalim',
    age:29,
    honors:45,
    hsc:20,
    isFfamily:false,
}
const person2={
    name:'sakib',
    age:29,
    honors:40,
    hsc:40,
    isFfamily:true,
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
    // if(totalMarks>80){
    //     return 'you got the job'
    // }
    // else{
    //     return 'you failed'
    // }
    console.log(totalMarks)
    return totalMarks;
}
const result=getJob(person1);
const result2=getJob(person2);
console.log('person1: ', result,  'person2:', result2)
console.log(result2)