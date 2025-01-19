const array=[10, 20, 30, 45,60];
// array.map((item) => console.log(item))

const result=array.map((item) =>item *2);
console.log(result)

const res=array.map((arr) =>{
    const x =arr +10;
    return x;
})
console.log(res)