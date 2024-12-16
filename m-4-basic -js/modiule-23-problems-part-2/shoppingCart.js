const products=[
    {name:"shampo", price:300, quantity: 2 },
    {name:"chironi", price:100, quantity: 3 },
    {name:"shirt", price:700, quantity: 5 },
    {name:"pant", price:1200, quantity: 1 },
]

function getTotalQuantityPrice(products){
    let total=0;
    for(const product of products){
        const thisProductCost=product.price * product.quantity;
        total=total +thisProductCost;
    }
    return total;
}
 const totalPrice=getTotalQuantityPrice(products);
 console.log("total shopping price:", totalPrice)