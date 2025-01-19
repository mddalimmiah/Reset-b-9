import './post.css'
export default function Post({post}){
// console.log(post)

// destructure
const {title, body, id, userId} =post
    return(

        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>User id:{userId}</small></p>
            <p><small>Post id:{id}</small></p>
            <p>{body}</p>
        </div>
    )
}