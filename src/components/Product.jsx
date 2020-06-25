import React from 'react';
import '../assets/Product.css'

const Product = props=>{
    const {name, description, price} = props;
    return(
        <>
            <div className="product">
                <div className="product-header">
                    <span className="product-name">{name}</span>
                    <span className="product-dollar-sign">$ </span>
                    <span className="product-price">{price},00</span>
                </div>
                {
                    description &&
                        <p className="product-description">{description}</p>
                }
            </div>
        </>
    )
};

export default Product;