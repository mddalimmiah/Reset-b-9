// array spreading

const numbers=[1, 2, 3,4];

const numbers2=[...numbers]; //array spreading

numbers2.push(10);
console.log(numbers2)
console.log(numbers)

// array destructuring

const array=[2, 3, 4, 5, 6, 8];

// const [x, y] =array;
const [x, y,...z] =array; //baki gola z a rakhbe eta hocce rest operator


console.log(x, y, z)