
function calculateTax(income, expenses) {
    if(typeof income !=='number' || typeof expenses !=='number'){
     return 'Invalid Input';
    }
     else if(income<=expenses){
     return 'Invalid Input'
    }
    else if(income<0 || expenses<0){
     return 'Invalid Input'
    }
     const totalIncome=income - expenses;
     const totalTax=totalIncome* 0.20;
     return totalTax;
 
 }

 function sendNotification(email) {
       
    if(typeof email !=='string' || email.indexOf('@')===-1){
        return 'Invalid Email';
    }
    
    const userEmail=email.split('@');
    const userName=userEmail[0];
    const domainName=userEmail[1];
    return userName +' sent you an email from '+domainName;
}

function checkDigitsInName(name) {
    if(typeof name !=='string'){
        return 'Invalid Input';
    }
   for(let item of name){
    if(!isNaN(parseInt(item))){
        return true;
    }
   
   }
   return false;
}

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

function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) ||typeof serialNumber !=='number'){
        return 'Invalid Input';
    }

    let sum=0;
    let avg=0;
    let rounded;
    let time;
    for(let i=0; i<waitingTimes.length; i++){
        sum=sum+waitingTimes[i];
        avg=sum/waitingTimes.length;
        rounded=Math.round(avg);
        let serial=waitingTimes.length - (serialNumber-1);
        time=Math.abs((rounded * serial));
    }
    return time;
  
}