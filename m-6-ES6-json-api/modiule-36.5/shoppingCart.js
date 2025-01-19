const addProduct= () =>{
    const productField=document.getElementById('product-name');
    const quantityField=document.getElementById('product-quantity');
    const product=productField.value;
    const quantity=quantityField.value;
    productField.value='';
    quantityField.value='';
    console.log(product, quantity)
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct= (product, quantity) =>{

    const ul=document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${product} : ${quantity}`;
    
    ul.appendChild(li);

}

const getStoredShoppingCart=() =>{

    const storedCart=localStorage.getItem('cart');
    let cart={};
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage =(product,quantity) =>{
    const cart=getStoredShoppingCart();
    cart[product] =quantity;
    // console.log(cart)
    const cartStringiFied=JSON.stringify(cart);
    // console.log(cartStringiFied);

    localStorage.setItem('cart', cartStringiFied);
}
   
const displayProductFromLocalStorage=()=>{

    const saveCart=getStoredShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity=saveCart[product]; //object er value gola pawr jonno
        console.log(product, quantity);
        displayProduct(product, quantity) //display korle browser a thakbe reload dile o jabe na
    }
}

displayProductFromLocalStorage();
