const promise1=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(' Result of resolve promise 1')
    }, 1000)
}) ;
const promise2=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(' result of resolve promise 2')
    }, 2000)
}) ;
const promise3=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(' result of resolve promise 3')
        // reject('rejected promise 3')
    }, 3000)
}) ;
console.log('calling 3 async tusk')
// promise1.then((response)=>{
//     console.log(response);
//     promise2.then((response) =>{
//         console.log(response);
//         promise3.then((response)=>{
//             console.log(response)
//         });
//     });
// });

// multiple promise call method
// .then

// Promise.all([promise1, promise2, promise3])
// .then(values=>{
//     console.log(values)
// })
// .catch(error => console.log(error));

// async 

const getAllPromise =async() =>{
    // const results= await Promise.all([promise1, promise2, promise3])
    // console.log(results)

    const [results1, results2, results3]=await Promise.all([promise1, promise2, promise3])
    console.log(results1, results2, results3)
}
getAllPromise()