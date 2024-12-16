// console.log('app connected')

function loadData2(){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data)) // function call kore dici (parameter hisebe data ta dici )
}

function displayUsers(data){
    console.log(data)
}