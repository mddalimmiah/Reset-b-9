import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Cart: {cart.length}</h2>
            <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        
                        <img  src={bottle.img}></img>
                        <button onClick={() =>handleRemoveFromCart(bottle.id)}>Remove</button>
                       </div> )
                }
            </div>
        </div>
    );
};
// Cart.PropTypes={cart:PropTypes.array.isRequired}
Cart.PropTypes ={cart: PropTypes.array.isRequired,

    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;