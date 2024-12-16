
const products=[
    {id:1, name: 'lenovo', price:65000},
    {id:2, name: 'dell', price:50000},
    {id:3, name: 'hp', price:45000},
    {id:4, name: 'Mac', price:150000},
    {id:5, name: 'Asus', price:40000},
];

// Class has some properties, method
// class function declare kora jay tobe function key word likhbona 
// variable declare kora jay bt variable key word let, const likhbona class a 
class Product{
    country ='Banlgladesh';
    constructor(name){
        this.name =name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo');
console.log(lenovo)
lenovo.speak('kita koro')

class Teacher{
    constructor(name, subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(){
        console.log('sir is lecturing')
    }
}

const tapan = new Teacher('tapan sir', 'physics');

console.log(tapan);

const RashidSir=new Teacher('Rashid sir', 'English');

console.log(RashidSir)