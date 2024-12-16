const mobiles=[
    {name:'samsung', price:30000, Camera: '12mp', color:'Black'},
    {name:'oppo', price:40000, Camera: '16mp', color:'Black'},
    {name:'xoumi', price:20000, Camera: '12mp', color:'Black'},
    {name:'Iphone', price:130000, Camera: '12mp', color:'Black'},
    {name:'walton', price:15000, Camera: '12mp', color:'Black'},
    {name:'vivo', price:10000, Camera: '12mp', color:'Black'},
    {name:'lenovo', price:35000, Camera: '12mp', color:'Black'},
    {name:'realmi', price:25000, Camera: '12mp', color:'Black'},
]

function getCheapestPhones(phones){
    // console.log(phones)
    let min=phones[0];
    for(const phone of phones){
        // console.log(phone)
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}
const cheap=getCheapestPhones(mobiles);
console.log("cheapest phone is:", cheap)

function getHighestPrice(phones){
    let max=phones[0];
    for(const phone of phones){
        if(phone.price>max.price){
            max=phone;
        }
    }
    return max;
}
const maxPrice=getHighestPrice(mobiles);
console.log("highest Phone price is:", maxPrice)