import React from "react";
import logo2 from '../image/logo1.png';
import {Link} from 'react-router-dom';
import '../style/Header.css';
import { menuItem } from "../pages/Dropdown/menuItem";
import MenuItems from "../pages/Dropdown/MenuItems";
import {BsCart4} from 'react-icons/bs';
import {AiOutlineLogout} from 'react-icons/ai';


 function Header(){
    
    return<>
        <div classname="container-fluid" style={{borderBottom:`1px solid red`}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbars">
                <div class="container-fluid leftSide">
                    <a class="navbar-brand" href="">
                        <img src={logo2} alt="" width={60} height={40}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse hiddenLinks" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/home">Home</Link></a>
                            </li>
                            <li class="nav-item">
                                {/*<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href=""><Link to="/Veg">Veg</Link></a></li>
                                    <li><a class="dropdown-item" href=""><Link to="/Nonveg">Non-Veg</Link></a></li>
                                    <li><a class="dropdown-item" href="">Other-Items</a></li>

                                </ul>*/}
                                <a class="nav-link active" aria-current="page" href="#">
                                    <ul className="menus">
                                        {menuItem.map((menu, index) => {
                                            const depthLevel = 0;
                                            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                                        })}
                                    </ul>
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/Speciality">Speciality</Link></a>
                                
                            </li>

                            <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#"><Link to="/About">About Us</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/Contact">Contact</Link></a>
                                
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/Chefs">Chefs</Link></a>
                                
                            </li>
                        </ul>
                        <div class="faUser" role="group" aria-label="Basic outlined example">
                            <a href="#"><Link to="/Cartpage"><BsCart4></BsCart4></Link></a>
                            
                            <button type="button" class="btn"><Link to="/Signin">Sign Up/Sign In</Link></button>
                            <a href="#"><Link to="/"><AiOutlineLogout></AiOutlineLogout></Link></a>
                        </div>   
                    </div>
                </div>  
            </nav>
        </div>
    </>
 }
export default Header;