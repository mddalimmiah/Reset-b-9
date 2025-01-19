// fetch('https://openapi.programming-hero.com/api/peddy/pets')
// .then(response=> response.json())
// .then(data => console.log(data))
// .catch(error=> console.log(error))

const promise1= new Promise((resolve, reject) =>{
console.log('promise is made')
// resolve()
// reject()

const err=false;
setTimeout(() =>{
    if(!err){
        resolve('promise is resolved')
    }
    else{
        reject(' opps...promise is error happened')
    }
},3000)
});

// promise1
// .then(response =>{
//     console.log(response)
//     console.log('this is response block')
// })
// .catch(err=>{
//     console.log(err)
//     console.log('this is error catch block')
// })
// .finally(()=>{
//     console.log('finally block is run')
// })

// async promise

const getPromise= async () =>{
   try{
    const response= await promise1;
    console.log(response)
   }catch(error){
    console.log(error)
   }finally{
    console.log('finally block is run')
   }
}
getPromise()