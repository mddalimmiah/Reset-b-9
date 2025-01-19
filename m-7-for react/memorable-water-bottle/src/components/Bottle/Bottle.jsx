import './bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddToCart}) => {

    // console.log(bottle)

    const {name, price, img} =bottle;
    return (
        <div className="bottle">
            <h3>Bottle : {name} </h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;

Bottle.PropTypes= {
    bottle : PropTypes.object.isRequired,
    handleAddToCart: PropTypes.object.isRequired

}