console.log('connect simple counter');
// read operation
const count=document.getElementById('count');
// console.log(count.innerText)
 const counter=document.getElementById('counter');
 counter.addEventListener('click', function(){
    // console.log('counter');
    if(increaseButton.getAttribute('disabled')===null){
        console.log('counter');
        increaseButton.setAttribute('disabled', true);
        decreaseButton.setAttribute('disabled', true);
        counter.classList.add('bg-red-600');
    }
    else{
        increaseButton.removeAttribute('disabled', true);
        decreaseButton.removeAttribute('disabled', true);
        counter.classList.remove('bg-red-600');
    }
   
 })


// function increaseCount(){
//     // console.log('increaseCount')
//     let currentCount=Number(count.innerText);
//     currentCount++;
//     count.innerText=currentCount;
// }
// function decreaseCount(){
//     // console.log('decreaseCount');
//     let currentCount=Number(count.innerText);
//     currentCount--;
//     count.innerText=currentCount;
// }

// stop propagation normal onclick a kaj korbena tai id or class diye addevent Listener korte hobe

const increaseButton=document.getElementsByClassName('increase-btn')[0];
increaseButton.addEventListener('click', function(event){
    let currentCount=Number(count.innerText);
        currentCount++;
        count.innerText=currentCount;
        event.stopPropagation();
})
const decreaseButton=document.getElementsByClassName('decrease-btn')[0];
decreaseButton.addEventListener('click', function(event){
    let currentCount=Number(count.innerText);
        currentCount--;
        count.innerText=currentCount;
        event.stopPropagation();
})
