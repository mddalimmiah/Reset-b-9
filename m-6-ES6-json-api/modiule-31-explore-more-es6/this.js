class Person{
    constructor(name, age){ // class likhte hole constructor diye parameter dite hoy 
        this.name=name; // this means Person.name
        this.age=age; // Person.age
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    activity(){
        this.sleep()
    }
}
const dalim =new Person('Dalim Miah', 30);
console.log(dalim);
dalim.sleep(); //call kora hoice

const safi =new Person('safi', 26);

safi.sleep();
console.log(safi)

// bejal

// const lazy=kodom.sleep; //this akta confusing

// console.log(lazy);// error dibe

// explain this key word js (chatgpt)