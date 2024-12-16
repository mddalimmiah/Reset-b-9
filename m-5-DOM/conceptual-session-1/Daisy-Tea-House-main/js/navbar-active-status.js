console.log('active');

const ulTag=document.getElementById('nav-container');
console.log(ulTag);

const listItems=ulTag.getElementsByTagName('li');
console.log(listItems);
let lastClicked = null;
for(const li of listItems){
    // console.log(li.innerText)
    li.addEventListener('click', function(){
        // console.log(li.innerText);
        // যদি লাস্ট ক্লিক যদি নাল হয় তাহলে লাল হতে দিবো।
        if(lastClicked === null){
            li.style.backgroundColor ='red';
            li.style.color='blue';
            lastClicked=li;
        }
        else{
            lastClicked.style.backgroundColor= 'transparent';
            lastClicked.style.color='goldenrod';
            li.style.backgroundColor ='red';
            li.style.color='blue';
            lastClicked=li;
        }
    })
}