const jim=100;
const tim=120;
const kim=150;

if(jim>tim && jim>kim){
    console.log("jim is the ultimate boss");
}
else if(tim>kim && tim>jim){
    console.log("tim is the ultimate boss");
}
else{
    console.log("kim is the ultimate boss");
}


function getMax3(num1, num2, num3){
    if(num1> num2 && num1>num3){
        return num1;
    }
    else if(num3>num1 && num3>num2){
        return num3;
    }
    else{
        return num2;
    }
}
const max1=getMax3(130, 140, 20);
console.log("biggest number is :", max1)

const max=Math.max(12, 30, 100, 300, 40);
console.log(max)