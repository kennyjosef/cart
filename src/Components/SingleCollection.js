import React from "react";

function SingleCollection({sneaker, cart, setCart}) {
    const addToCart=()=>{
        setCart([...cart, sneaker])
    }
    const removeFromCart=()=>{
        setCart(cart.filter(item=>item.id!==sneaker.id))
    }
    return(
        <div className="sneakers">
            <div>
            <img src={sneaker.image} alt="image" className="image"/>
            </div>
            <div>
            <h3 className="price">${sneaker.price}</h3>
            {cart.includes(sneaker) ? (
                <button disabled className="btnCart disabled" onClick={addToCart}>
                    <h5>Added to cart</h5>
                </button>
            ):(
                <button className="btn" onClick={addToCart}>
                    <h5>Add to Cart</h5>

                </button>
            )}
            </div>
        </div>
        
    )
    
}
export default SingleCollection