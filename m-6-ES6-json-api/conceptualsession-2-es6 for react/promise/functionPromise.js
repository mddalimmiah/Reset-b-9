const promise= (name)=>{
    return new Promise((resolve, reject) =>{
        console.log(` ${name} Your promise is made`)
        // resolve()
        // reject()
        
        const err=true;
        setTimeout(() =>{
            if(!err){
                resolve(`${name} your Promise is resolved`)
            }
            else{
                reject(`opps.. ${name} Your promise is error happened`)
            }
        },3000)
        });
}
promise('Dalim')
.then(res=>console.log(res))
.catch(error=>console.log(error))

