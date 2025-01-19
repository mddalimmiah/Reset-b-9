const getStoredCart=() =>{
    const storedCartString=localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
  return [];
}

const saveToLocalStorage= cart =>{
    const cartStringiFied=JSON.stringify(cart);
    localStorage.setItem('cart', cartStringiFied);
}

const addToLocalStorage= id =>{
    const cart=getStoredCart();
    cart.push(id);
    // save to local storage
   saveToLocalStorage(cart)
}

const removeFromLocalStorage= id=>{
    const cart =getStoredCart();
    // removing every id
    const remaining=cart.filter(idx => idx !==id);
    saveToLocalStorage(remaining);
}

export {addToLocalStorage, getStoredCart, removeFromLocalStorage}