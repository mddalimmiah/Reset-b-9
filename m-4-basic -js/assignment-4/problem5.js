
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

const result=waitingTime([13, 2], 6);
console.log(result)