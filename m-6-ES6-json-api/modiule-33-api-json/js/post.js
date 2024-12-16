// console.log('post connected')

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}


/*
1. get the container where add the element  
2. create child element 
3. set innerHtml

4. set appendChild
*/
function displayPosts(posts) {
    // console.log(posts)

    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post)

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4> user: ${post.userId} </h4>

        <h5> post: ${post.title} </h5>
        <p> post Description: ${post.body} </p>

        `
        postContainer.appendChild(postDiv);



    }
}

loadPosts()




