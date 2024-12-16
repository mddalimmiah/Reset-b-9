const numbers=[12, 13, 2, 4, 6, 7, 35, 49, 20];
// let sum=0;
for(let item of numbers){
    sum+=item;
    console.log(item)
}
console.log('total numbers of sum:', sum)

let evens=[];
for(let item of numbers){
    // console.log(item%2===0)
    if(item %2===0){
        evens.push(item);
    }
}
console.log("the number of array are Evens:", evens)

// odd numbers

let odds=[];
let sum=0;
for(let item of numbers){
    if(item %2===1){
        odds.push(item)
        sum+=item;
    }
    
}
console.log('the number of array are ODD', odds, sum)