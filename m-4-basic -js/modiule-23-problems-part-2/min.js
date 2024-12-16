const mobilePrice=[20000, 14000, 30000, 40000, 100000];

function minPrice(prices){
    let min=prices[0];
for(const price of prices){
    if(price<min){
        min=price;
    }
}
return min;
}

const minP=minPrice(mobilePrice);
console.log("lowest mobile price:", minP)