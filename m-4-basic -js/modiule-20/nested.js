const college={
    name:'VNC',
    class:[11, 12],
    events:['science fair', 'lab Fair', 'baishakhi fair', 'book fair'],

    unique:{
        color:'red',
        result:{
            gpa:5,
            merit:'top most'
        }
    }
}

// console.log(college.unique)
console.log(college.unique.result.gpa)
college.events[1]=['Bijoy Dibos'];

console.log(college.events[1])
delete college.class
console.log(college)