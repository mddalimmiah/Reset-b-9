// 4 types arrow function

const show=()=>{
    console.log('this is arrow function')
}
show()
const show1=()=>{
   return 'this is arrow'
}
show1()
const show2=(x)=>{
    console.log('this is value', x)
}
show2(5)
const show3=(x)=>{
    return x*2;
}
show3(5)