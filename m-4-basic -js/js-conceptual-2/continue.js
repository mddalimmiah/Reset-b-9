const numbers=[10,5, 20,15, 30, 25, 40, 17, 50, 23, 60];
let evens=[];
let odd=[];
for(let i=0; i<=numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i] % 2 !==0){
        evens.push(numbers[i]);
        continue;
    }
    else{
        console.log(numbers[i])
    }
}
console.log(evens)