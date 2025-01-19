import { useEffect, useState } from "react"


export default function Posts(){

    const [posts, setPost] =useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data =>setPost(data))
    }, [])
    return (
        <div>
            <h3>Posts: {posts.length} </h3>
           {
            posts.map(post =><Post></Post>)
           }
        </div>
    )
}

/*
1. create a state to store data
2.  Create  useEffect with no dependencies
3. use fetch to load data

*/
