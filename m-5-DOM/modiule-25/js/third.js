const mainContainer=document.getElementById('main-container');
console.log(mainContainer)

const section=document.createElement('section');
section.innerHTML=`
<h1> MY Dynamic section </h1>
<p> MY paragraph ..extra text added </p>

<ul> 
<li> MY first item </li>
<li> MY second item </li>
<li> MY third item </li>
<li> MY forth item </li>
</ul>
`

mainContainer.appendChild(section)