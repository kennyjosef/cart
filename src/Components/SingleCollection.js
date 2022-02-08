import React from "react";
import Logo1 from '../Assets/icon-cart.svg'
import classes from'./Collection.css'

function SingleCollection({sneaker, cart, setCart}) {
    const addToCart=()=>{
        setCart([...cart, sneaker])
    }
    const removeFromCart=()=>{
        setCart(cart.filter(item=>item.id!==sneaker.id))
    }
    return(
        <div className="sneakers">
            <div className={classes.sneaker1}>
            <img src={sneaker.image} alt="image" className="imag"/>
            </div>
            <div className={classes.sneaker2}>
            <h3 className="price">${sneaker.price}</h3>
            {cart.includes(sneaker) ? (
                <button disabled className="BtnCart disabled" onClick={addToCart}>
                    <img src={Logo1} alt='cart' className='cart_img' />
                    <h5>Added to cart</h5>
                </button>
            ):(
                <button className="BtnCart" onClick={addToCart}>
                    <img src={Logo1} alt='cart' className='cart_img' />
                    <h5>Add to Cart</h5>

                </button>
            )}
            </div>
        </div>
        
    )
    
}
export default SingleCollection