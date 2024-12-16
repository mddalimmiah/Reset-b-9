// console.log('append')
// 1. where to add
const placesList=document.getElementById('places-list');
// console.log(placesList)
// 2. what to be added
const li=document.createElement('li');
li.innerText='Sajek belly';
//  3. add the child
placesList.appendChild(li);

// 1. where to be add
const mainContainer=document.getElementById('main-container');
// console.log(mainContainer);
//  2. what to be added

const section=document.createElement('section');


const h1=document.createElement('h1');
h1.innerText='My Food list';

// 3. add the child
section.appendChild(h1)

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);
const li2=document.createElement('li');

li2.innerText='Morog Polao';
ul.appendChild(li2);
const li3=document.createElement('li');

li3.innerText='Fried Chicken';
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section)


// set inner html directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1> MY Section Dress </h1>

<ul> 
<li> shirt </li>
<li> pant </li>
<li> genji </li>
<li> t-shirt </li>
</ul>
`
mainContainer.appendChild(sectionDress)