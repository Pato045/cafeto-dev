import React from 'react';
import Product from './Product';
import '../assets/Category.css'

const Category = props =>{
    const products = props.products.map(product=><Product key={product.id} name={product.name} description={product.description} price={product.price} />)

    return(
        <div className="category">
            <h4>{props.category}</h4>
            {products}
        </div>
    )
}

export default Category;