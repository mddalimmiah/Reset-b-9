const person={
    name:'Dalim',
    age:30,
    profession:'developer',
    salary:30000,
    isMarried:true,
    hasBaby:true,
    'fab places':['coxsbazar', 'bandarbnan', 'koakata'],

}

person.salary=40000;

person['age']=31;
person['fab places']=['sundarban', 'coxsbazar', 'saintmartin', 'koakata', 'rangamati', 'sylhet'];
const profName='profession';
person[profName]='devops'
console.log(person)