console.log('test');
const images=document.getElementsByTagName('img');
const cards=document.getElementsByClassName('card');
// console.log(images);
// console.log(cards);
const hmtlTag=document.getElementsByTagName('html')[0] //html tag ta পাওয়ার জন্য এটা
// console.log(hmtlTag)
// const theme=hmtlTag.getAttribute('data-theme'); // এট্রিবিউট পাওয়ার জন্য  গেট  এট্রিবিউট
// console.log(theme)
hmtlTag.setAttribute('data-theme', 'light');
console.log(hmtlTag.getAttribute('data-theme'));
const button=document.getElementsByClassName('btn')[0]
console.log(button.textContent) //text content dile aga pore white space soho dibe jodi thake
console.log(button.innerText)
