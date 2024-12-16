const mobile={
    brand:'samsung',
    model:'16',
    price:45000,
    color:'black',
    camera:'20mpx',
    isNew:true,

}

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}

const keys=Object.keys(mobile);

console.log(keys)

for(const key of keys){
    console.log(key, ":", mobile[key])
}

const pen={brand:'econo', color:'red', price:10};

console.log(pen)
const pencil=new Object();
console.log(pencil)
const rubber=Object.create({});
console.log(rubber)