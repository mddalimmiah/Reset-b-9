const person={
    name:'Dalim',
    age:30,
    3:'third',
    'ad-dress':'tb gate'
}
const prop='name';
console.log(person.name);
console.log(person['name']); //bracket notation dile bracket er vitore string declare kore dite hobe
// bracket notation dile hoy string diye dibo noy object er property k variable decale kore dibo (variable dile string dite hobe na)
console.log(person[prop])
console.log(person['3'])
console.log(person['ad-dress']);