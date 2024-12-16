const heights=[65, 70, 72, 76, 86, 90];

function getMax(numbers){
    // console.log(numbers)
    let max=numbers[0];
    for(const num of numbers){
        // console.log(num)
        if(num>max){
            max=num;
        }
    }
    return max;
}

const getTallest=getMax(heights);

console.log("the tallest number is:", getTallest)

// lowest min

function getLowest(numbers){
let min=numbers[0];
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const min=getLowest(heights);

console.log('lowest number is:',min)