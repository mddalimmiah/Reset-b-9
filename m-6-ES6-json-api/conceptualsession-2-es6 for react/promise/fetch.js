// fetch('https://openapi.programming-hero.com/api/peddy/pets')
// .then(response=> response.json())
// .then(data => console.log(data))
// .catch(error=> console.log(error))

const showData= async () =>{
    const result= await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    // console.log(result);
    const data = await result.json();
    console.log(data)
}
showData()