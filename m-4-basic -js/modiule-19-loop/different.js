// odd number

// for(i=0; i<20; i++){

//     if(i%2===1){
//         console.log(i)
//     }
// }

// for(i=1; i<100; i++){
//     if(i%2 !==0){
//         console.log('odd number is:', i)
//     }
// }
// for(i=1; i<50; i+=2){
//     if(i%2 !==0){
//         console.log('odd number is:', i)
//     }
// }

// for(i=1; i<=30; i++){
//     if(i%5===0){
//         console.log("5 devisable:", i)
//     }
// }
// for(i=1; i<=30; i++){
//     if(i % 3===0 || i % 5 ===0){
//         console.log(i)
//     }
// }

// for(i=1; i<=310; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log(i)
//     }
    
// }

// 1 to 30 divisable 3 and sum:
let sum=0;
for(i=1; i<=20; i++){
    if(i % 3===0){
        sum=sum+i;
        console.log(i)
        
    }
    
}
console.log('total sum:', sum)