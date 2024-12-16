// data access:

const data=[{id:2, name:'safi', address:'tb gate'}];

console.log(data[0].address);

const products= {

    count:5000,
    data:[
        {id:1, name:'lenovo lapto', price:40000},
        {id:2, name:'Macbook lapto', price:140000},
    ],
}

// output: need second product price:

console.log(products.data[1].price);

const user={
    id:5001,
    name:'Dalim MIah',
    address:{
        street:{
            first:'w-5, tb gate',
            second:'Mohakhali',
            third:'gulshan',
        },
        City:'Dhaka',
    },
    
};

const user2={
    id:5002,
    name:'sidrat',
    address:{
        city:'Dhaka',
        country:'Bangladesh',
    }
}
console.log(user.address.street.second)
console.log(user2.address.street?.second) //khujte giye question mark diye dile jodi na theake tahole error dibe na dibe indefined: