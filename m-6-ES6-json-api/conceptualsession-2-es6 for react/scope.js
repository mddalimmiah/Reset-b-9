// global declaration 

let x=5;
console.log(x);
if(true){
    console.log(x)
}

const show=()=>{
    console.log(x)
}
show()

if(true){
    // block er modday noto vabe variable redeclare kora jabe
    // block scope a prothom a tar arear modday khuje data ase kina na thakle global access theke data access kore
    let x=5;
    console.log(x)
}