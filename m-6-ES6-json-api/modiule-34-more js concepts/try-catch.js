
function checkAge(){
   const ageField=document.getElementById('age').value;

 
   const errorTag=document.getElementById('error')

   try{
    const age=parseInt(ageField);
    if(isNaN(age)){
       
        throw "please enter a number"
    }
    else if(age <18){
        throw 'bacha kacha not allowed'
    }
    else if(age>30){
        throw 'morobbi ra eikhane aisen na'
    }
    errorTag.innerHTML=''
   }
   catch(error){
    console.log('Error:', error)
    // errorTag.innerHTML='something wrong'
    errorTag.innerHTML="Error:" + error; //display error show korar jonno coma deya jabe na
    // rrorTag.innerHTML = `Error: ${error}`;

   }
   finally{
    console.log('all done inside the try catch')
   }
   console.log(111111111)
}