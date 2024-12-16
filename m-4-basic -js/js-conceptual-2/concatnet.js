const fruits=['Mango', 'Orange', 'Apple', 'Jackfruit'];

const flowers=['Rajoni Ganda', 'Rose','beli', 'joba'];

const numbers=[12, 13, 24, 45, 56,];
console.log(fruits);
console.log(flowers);

// console.log(fruits + ' ' +flowers);
const jog=fruits.concat(flowers);
console.log(jog)
console.log(fruits.concat(flowers, numbers))
console.log(jog[4])
const find=fruits.indexOf('Mango');
console.log(find)

const incl=flowers.includes('beli');
console.log(incl)

const fools=flowers.join('-');
const fools2=fruits.join(' / ');
console.log(fools)
console.log(fools2)

// console.log( typeof fools +' / '+ typeof fools2); // array k join er maddome string kora jaay

// console.log( typeof fruits + ' ,'+  typeof flowers) // array k + diye jog korle object hoye jay