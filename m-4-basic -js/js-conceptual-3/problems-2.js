
function getInfo(info){
    if(typeof info !=='object'){
        return 'please provide a valid object'
    }
    const result='My name is: ' +  info.name + ', My age is: ' + info.age + ', my address is: ' +info.address+ ', my mobile number: ' +info.Mobile; 
    return result;
}
const person={
    name:'Md.DalimMiah', 
    address:'Cumilla',
    Mobile:'01777658456', 
    age:30,
};

const myInfo=getInfo('person');
console.log(myInfo)

function createEmail(info){
    if(typeof info !=='object'){
        return 'invalid object'
    }
    const result= info.name +'@'+ info.age +'.com';
    return result;
}

const email=createEmail(person);
console.log(email)