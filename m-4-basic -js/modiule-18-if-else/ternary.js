// const age=121;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log('you are sleeping');
// }

// ternary:
/*

condition ? when condition is true: when condition is false

*/

// age>=18? console.log("you can vote") : console.log("you can sleep early")

let price=1500;
const isLeader=true;
// if(isLeader===true){
//     price=0;
   
// }
// else{
//     price+100;
    
// }

// console.log(price)
// price = isLeader === true ? 0 :  price + 100;
 
if(isLeader===true){
    if(price>1000){
        price=price/2;
    }
}
else{
    price=price+1000;
}
// console.log(price)

price=isLeader===true? price > 1000 ? price /2 : 0 : price + 1000;