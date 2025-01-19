
const products=[
    {name:'laptop', price:50000, brand:'Hp', color:'black'},
    {name:'desktop', price:150000, brand:'dell', color:'white'},
    {name:'phone', price:30000, brand:'oppo', color:'black'},
    {name:'sunglass', price:1000, brand:'ribon', color:'yellow'},
    {name:'camera', price:10000, brand:'canon', color:'black'},
];

const brands= products.map(product => product.brand);

console.log(brands)
const prices= products.map(product => product.price);

console.log(prices)

// forEach
 products.forEach(product=>console.log(product))
 products.forEach(product=>console.log(product.color))

//  filter

const cheap=products.filter(product=> product.price<20000);
console.log(cheap)

const specificNameInclude=products.filter(product =>product.name.includes('n'));
console.log(specificNameInclude)

const findSpecial=products.find(product=>product.name.includes('n'));

console.log(findSpecial)

// copy products an array  and add then new products

const newProducts={name:'webcame', price:700, brand:'lal'};


const newProduct=[...products, newProducts];
console.log(newProduct)

// create a new array without specific item 
// remove the phone array of products (create a new array of products without phone)

const remainingProducts=products.filter(product=>product.name !=='phone');
console.log(remainingProducts)