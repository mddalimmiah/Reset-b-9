// loop
const numbers=[1, 2, 3, 4, 5,6, 8];
 
// for(let i=0; i<numbers.length; i++){ // generally we are not use it;
//     console.log(numbers[i]);
// }
// while (not use)

// we use  for of

for(const num of numbers){
    console.log(num)
}

const nobab='siraj ud Doula';

for(const char of nobab){
    console.log(char)
}

// for of loop object a chalano jabe na 

// object a for in loop hobe 

const glass={name:'glass', color:'golden', price:12, isClean:true};

// for (const key of glass){
//     console.log(obj)
// }

for(const key in glass){
    const value=glass[key]
    console.log(key, value)
}

// optional 
//  অজক্টে এ সরাসরি ফর অপ লুপ চালানো যায় না। তবে এই ভাবে লুপ করা যাবে অবজেক্ট এর কী বের করে তার উপর লুপ চালানো যাবে কারন কী গুলো তখন এ্যারে 
const keys=Object.keys(glass);

for(const key of keys){
    console.log(key);
}