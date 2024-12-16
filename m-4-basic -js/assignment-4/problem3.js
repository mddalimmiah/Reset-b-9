function checkDigitsInName(name) {
    if(typeof name !=='string'){
        return 'Invalid Input';
    }
   for(let item of name){
    if(!isNaN(parseInt(item))){
        return true;
    }
   
   }
   return false;
}

   
   


const result=checkDigitsInName('ff');
console.log(result)

   // for (let digit of "0123456789") {
    //     if (name.includes(digit)) {
    //         return true;
    //     }
    // }
    // return false;