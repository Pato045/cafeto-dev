import React from 'react';
import '../assets/Product.css'

const Product = props=>{
    const {name, price} = props;
    return(
        <>
            <div className="product">
                <span className="product-description">{name}</span>
                <span className="product-dollar-sign">$ </span>
                <span className="product-price">{price},00</span>
            </div>
        </>
    )
};

export default Product;