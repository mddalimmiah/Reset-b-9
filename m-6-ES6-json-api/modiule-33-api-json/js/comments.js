// console.log('comments')

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happened', error))
    
}

const loadComments2= async() => {
    try{ //try ta error khujar jonno ba find out korar jonno 

        // await dile  প্যারামিটার আগে async  দিতে হবে নয়  এরর দিবে
        const res= await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data =await res.json(); //json hower ag porjonto opekkha korte hobe (await=mane opekkha)
    console.log(data)
    }
    catch(error){ // error find out korar jonno
        console.error('data load error');
    }
}