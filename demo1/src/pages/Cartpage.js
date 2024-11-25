import React from "react";
import '../style/Cartpage.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";
function Cartpage() {
    return <>
        <div className="homes">
            <div className="header-container">
                <div className="paras">
                    <h4 className="h-primary" id="h4">YOUR CART IS EMPTY !</h4>
                    <div><MdAddShoppingCart className="icons"></MdAddShoppingCart></div>
                    <Link to='/Veg'><button type="button" id="btn"> Order Now </button></Link>
                </div>
            </div>
        </div>
    </>
}
export default Cartpage;