/*
truthy: 

1. true;
2. any number (positive, negative) other tha 0 (  0 ছাড়া সব নাম্বার নেগেটিভ অথবা পসিটিভ ট্রু হবে)
3: any string true;
4: '0', 'false' (truthy value)
5. {} empty object truthy value
6. []


falsY: 
1. false
2. 0
3. '' (empty string falsy value )
4. undefined
5. null (falsy value)


*/


const x ='false';

if(x){
    console.log('x is truthy:', x)
}
else{
    console.log('x is falsy : ', x)
}

// optional

//  check falsy value ( একটা নট সাইন দিয়ে ফলসি ভ্যালু চেক করবো)

const y=0;

if(!y){
    console.log('value is falsy')
}

// check truthy:

// (ট্রুথি ভ্যালু চেক করার জন্য ২ টা নট সাইন দিতে হবে)

const z={id:2};

if(!!z){
    console.log('valu is truthy: z', z)
}