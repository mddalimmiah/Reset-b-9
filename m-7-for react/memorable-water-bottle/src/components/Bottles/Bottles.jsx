import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import '../Bottles/Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";



const Bottles = () => {

    const [bottles, setBottles] =useState([]);
    const [cart, setCart] =useState([]);

    useEffect( () =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    // load store cart from local storage

    useEffect(()=>{
        console.log('use effect', bottles.length)
        if(bottles.length>0){
            const storedCart=getStoredCart();
            console.log(storedCart, bottles)

            // loop throw for id 
            const saveCart=[];
            for(const id of storedCart){
                console.log(id);
                const bottle=bottles.find(bottle =>bottle.id===id);
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            console.log(saveCart)
            setCart(saveCart)
        }
    }, [bottles])
    const handleAddToCart=bottle =>{
        const newCart=[...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    }

    const handleRemoveFromCart= id =>{
        // visual cart remove
        const remainingCart=cart.filter(bottle => bottle.id !==id);
        setCart(remainingCart)
        // local storage remove cart

        removeFromLocalStorage(id);
    }
    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

        <div className="bottle-container">
        {
                bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
        </div>
        </div>
    );
};

export default Bottles;