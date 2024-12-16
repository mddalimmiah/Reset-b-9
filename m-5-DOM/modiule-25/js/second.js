console.log('second js file')
const secondList=document.getElementById('second-list');
console.log(secondList)

const li=document.createElement('li');
li.innerText='my dynamic item';

secondList.appendChild(li)