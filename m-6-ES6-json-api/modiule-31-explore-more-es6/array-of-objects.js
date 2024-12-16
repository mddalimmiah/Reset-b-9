const products=[
    {id:1, name: 'lenovo', price:65000},
    {id:2, name: 'dell', price:50000},
    {id:3, name: 'hp', price:45000},
    {id:4, name: 'Mac', price:150000},
    {id:5, name: 'Asus', price:40000},
];
// map
const names=products.map(product => product.name);
console.log(names);

const prices=products.map(p => p.price);
console.log(prices);

// forEach:
 products.forEach(p => console.log(p.id));

//  filter:
const expensivePrice=products.filter(product => product.price > 50000);
console.log(expensivePrice);

// find:

const affordable=products.find(p => p.price < 50000);

console.log('affordable:', affordable)

// reduce:

const total=products.reduce((accumulator, current) => accumulator + current.price,0); // initial value =0 thakbe always

console.log(total);