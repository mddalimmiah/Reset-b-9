function calculateFinalScore(obj) {
    if(typeof obj !=='object'){
        return 'Invalid Input';
    }
    const testScore=50;
    const schoolGrade=30;
    const isFarmer=20;
    const score=testScore + schoolGrade;
    let totalScore=obj.testScore + obj.schoolGrade;
    if(obj.isFFamily===true){
        totalScore=totalScore + isFarmer;
    }
     if(totalScore>=score){
        return true;
     }
     else{
        return false;
     }
    
}

const person={
    name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true 
}
const person2={
    name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false
}
const person3={
    name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  
}
const result=calculateFinalScore(person);
const result2=calculateFinalScore(person2);

console.log('person1:', result, 'person2:', result2)
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))