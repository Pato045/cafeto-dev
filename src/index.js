import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import products from './products';

ReactDOM.render(
  <React.StrictMode>
    <App products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

