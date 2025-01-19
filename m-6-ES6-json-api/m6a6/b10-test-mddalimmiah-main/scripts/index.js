// console.log('connect js')

// create categories

const loadButtonCategories= () =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then((res) => res.json())
    .then((data) => displayButtonCategories(data.categories))
    .catch((error) => console.log(error))

}
const loadCardCategories= () =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => displayCardCategories((data.pets)))
    .catch((error) => console.log(error))

}

/*
{petId: 1, breed: 'Golden Retriever', category: 'Dog', date_of_birth: '2023-01-15', price: 1200, …}
breed
: 
"Golden Retriever"
category
: 
"Dog"
date_of_birth
: 
"2023-01-15"
gender
: 
"Male"
image
: 
"https://i.ibb.co.com/p0w744T/pet-1.jpg"
petId
: 
1
pet_details
: 
"This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog."
pet_name
: 
"Sunny"
price
: 
1200
vaccinated_status
: 
"Fully"
[[Prototype]]
: 
Object

*/

const displayCardCategories= (cards) =>{
// console.log(cards)
const cardContainer=document.getElementById('card-container');
cards.forEach((card) =>{
    console.log(card)

    const cardView=document.createElement('div')
    cardView.classList="card bg-base-100 shadow-xl"
    cardView.innerHTML=`
    
<figure>
    <img class=" w-full lg:w-[400px] object-cover"
      src="${card.image}"
      alt="image" />
  </figure>
  <div class="flex flex-col px-4 py-4">
    <h2 class="card-title">
      ${card.pet_name}
      
    </h2>
    <div class="flex justify-start"><p class="flex justify-center items-center text-sm gap-2 "> <img class="border-0 text-white" src="https://img.icons8.com/?size=24&id=aEUiCprmQXz9&format=png"/>${card.breed}</p> </div>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>

    `;

    cardContainer.append(cardView)
})
 
};
// {id: 1, category: 'Cat', category_icon: 'https://i.ibb.co.com/N7dM2K1/cat.png'}
// category
// : 
// "Cat"
// category_icon
// : 
// "https://i.ibb.co.com/N7dM2K1/cat.png"
// id
// : 
// 1
const displayButtonCategories=(dataCategories) =>{
    const btnContainer=document.getElementById("btn-categories");
    dataCategories.forEach( (item) => {
        // console.log(item)
        const button=document.createElement('button');
        button.classList=" w-full lg:w-[250px] h-full lg:h-[80px] btn border-2 border-cyan-900 rounded-full px-4 gap-4"
        button.innerHTML=`
        <img class="w-8" src="${item.category_icon}"/> ${item.category}
        `
        
        btnContainer.append(button);
        
    });
}

loadButtonCategories()
loadCardCategories()