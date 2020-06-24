import React from 'react';
import Product from './Product';
import '../assets/Category.css'

const Category = props =>{
    const products = props.products.map(product=><Product key={product.id} name={product.name} price={product.price} />)

    return(
        <>
            <h4>{props.category}</h4>
            {products}
        </>
    )
}

export default Category;