// callBack mane holo akta function pore call hobe

const fun1 =(x, y, callBack) =>{
    console.log('this is function1')
    console.log(typeof callBack)
    callBack(x,y) // eta akta parameter function er kaj korbe  tai function moto kore dite hobe
}

const fun2 =(x, y)=>{
console.log(x+y)
}

fun1(4,5, fun2)

const giveName=(name, callBack)=>{
setTimeout(()=>{
    callBack(name)
}, 3000)
}

const greetings=(name)=>{
    console.log(`Hello ${name}`)
}
console.log('first line of code')
giveName('Dalim Miah', greetings)
console.log('last line of code')