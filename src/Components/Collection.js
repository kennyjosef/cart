import { useState } from "react";
// import SingleProduct from "./SingleProduct";

const collections=[
    {
        id:1,
        price: '125.00',
        image: 'sneak1.png'
    },
    {
        id:2,
        price: '100.00',
        image: 'sneak2.png'
    },
    {
        id:3,
        price: '225.00',
        image: 'sneak3.png'
    },
    {
        id:4,
        price: '105.00',
        image: 'sneak4.png'
    },
    {
        id:5,
        price: '125.00',
        image: 'sneak5.png'
    },
    {
        id:6,
        price: '120.00',
        image: 'sneak6.png'
    },
    {
        id:7,
        price: '250.00',
        image: 'sneak7.png'
    },
    {
        id:8,
        price: '125.00',
        image: 'sneak8.png'
    },
    {
        id:9,
        price: '150.00',
        image: 'sneak9.png'
    },
    {
        id:10,
        price: '200.00',
        image: 'sneak10.png'
    },
    {
        id:11,
        price: '205.00',
        image: 'sneak11.png'
    },
    {
        id:12,
        price: '105.00',
        image: 'sneak12.png'
    },
    {
        id:13,
        price: '250.00',
        image: 'sneak13.png'
    },
    {
        id:14,
        price: '225.00',
        image: 'sneak14.png'
    },
]
function Collection({cart, setCart}) {
    const [sneakers]=useState(collections)

    return(
        <div className="container">
            {sneakers.map(sneaker=>(
                sneaker={sneaker}
                // key={sneakers.id}
                // cart={cart}
                // setCart={setCart}
            ))}

        </div>
    )
    
}
export default Collection