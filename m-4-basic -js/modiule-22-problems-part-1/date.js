const today=new Date();
console.log(today)

const date= new Date('2062-11-22');
console.log(date)
console.log(date.getMonth())
console.log(date.getDay())
const specificDate= new Date(2091, 0, 26);
console.log(specificDate)
specificDate.setMonth(11)
console.log(specificDate.toLocaleDateString('eg-GB'))