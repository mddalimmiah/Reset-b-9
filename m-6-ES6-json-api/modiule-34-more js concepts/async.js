// console.log(1)
// // console.log(2)
// // setTimeout(doSomething, 4000) //4 second pore asbe
// setTimeout(()  => {
// console.log('lazy logged')
// }, 4000)

// console.log(4)
// console.log(5)
// console.log(6)

// function doSomething(){
//     console.log(3)
// }

// promise 

const myLoader =() => {
    return new Promise((resolve, reject) =>{
        const success=Math.random(); //random 0-1 porjonto random songha dibe
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data => console.log('resolve data', data))
.catch(error => console.log('rejected with value', error))

// fetch

fetch('')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

 async function loadData(){
    const res= await fetch('');
    const data =await res.json();

    console.log(data);
    return data;
}

const taskLoader = async() =>{
const res=await fetch('');
const data=await res.json();
console.log(data)

}
loadData();
taskLoader()