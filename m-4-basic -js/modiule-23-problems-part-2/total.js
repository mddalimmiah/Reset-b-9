const products=[
    {name:"shampo", price:300},
    {name:"chironi", price:100},
    {name:"shirt", price:500},
    {name:"pant", price:1500},
]

function getShoppingTotal(products){
    let total=0;
for(const product of products){
    // console.log(product)
     total=total + product.price;

}
return total;
}
const totalPrice=getShoppingTotal(products);
console.log('total shopping cost:', totalPrice)