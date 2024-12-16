// 2 ta string k jora lagano

const firstName='Md.';
const lastName='Dalim';

// const fullName=firstName + lastName;
const fullName=firstName + ' ' + lastName;
console.log(fullName)

const fullN=firstName.concat(' ').concat(lastName);
console.log(fullN)
console.log(fullN.includes('D'))