
// passBy 

let num1=5;
let num2=7;

function multiply(a, b){
    a=12; //a er ei man dhore function result dibe
const result=a*b;
return result;
}
console.log(num1)
const output=multiply(num1, num2);
console.log(output);


// object an array are pass by reference
let student={name:'safi', partner:'Dalim'};
let student2={name:'Farjana', partner:'Dalim Miah'};

function makeCouple(couple1, couple2){
    couple1.name='farjana safi';
    couple2.partner='D saif'
}

console.log(student, student2)

makeCouple(student, student2);
console.log(student, student2)