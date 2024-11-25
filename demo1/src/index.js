import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Droid Sans', 'Chilanka','Dancing Script','Peralta','Pacifico','Cormorant Garamond','Courgette']
  }
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
    
      
    
    </App>
  </React.StrictMode>
);

reportWebVitals();
