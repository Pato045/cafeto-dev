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
            <div className="category-frame">
                { categories }
                <div className="social-media">
                    <a className="link" href="https://www.facebook.com/Cafeto-Bar-532254617187266"><i class="fab fa-facebook-square"></i></a>
                    <a className="link" href="https://www.instagram.com/cafetobar/"><i class="fab fa-instagram"></i></a>
                    <a className="link" href="https://wa.me/5493804750591"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <p className="footer">Programador: Patricio Peña</p>
        </>
    )
};

export default App;