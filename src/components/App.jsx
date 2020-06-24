import React from 'react';
import Category from './Category';
import '../assets/App.css';

const App = ({products}) =>{

    Array.prototype.unique=function(a){
        return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
      });

    const categoryNames = products.map(product=>product.category).unique();

    const categories = categoryNames.map(category=><Category key={category} category={category} products={products.filter(product=> product.category === category)} />)

    return(
        <>
            <h3>-BAR-</h3>
            <h1>CAFETO</h1>
            <h2>Carta:</h2>
            { categories }
        </>
    )
};

export default App;