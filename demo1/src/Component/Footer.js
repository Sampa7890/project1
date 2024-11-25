import React from "react";
import logo2 from '../image/logo1.png';
import googleplay1 from '../image/googleplay.png';
import appstore1 from '../image/appstore.png';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import '../style/footer.css'
function Footer(){
    return <>
        <div class="container-fluid footer" style={{borderTop:`1px solid red`}}>
            <div class="row center">
                <div class="col-sm-4">
                    <div className="flex_item">
                        <img src={logo2} alt="" width={40} height={30}></img>
                        <h3 className="text">ADDYEATS!</h3>
                    </div>
                    
                    <ul className="list text">
                        <li className="list_item">Disclaimer</li>
                        <li className="list_item">Privacy Policy</li>
                        <li className="list_item">Faq</li>
                        <li className="list_item">Terms & Condition</li>
                        <li className="list_item">Feedback</li>
                    </ul>
                </div>
                <div class="col-sm-5 center">
                    <p className="text1" id="para">All Rights Reserved.&copy; Maddyeats Foodworkers Ltd.</p>
                    <BsFacebook className="icon fb"></BsFacebook> <FaInstagramSquare className="icon insta"></FaInstagramSquare> <BsTwitter className="icon twi"></BsTwitter> <FaLinkedin className="icon link"></FaLinkedin>
                </div>

                <div class="col-sm-3 center" > 
                    <h3 className="h-secondary">Download Now</h3>
                    <ul className="list center">
                        <li className="list_item"> <img src={googleplay1} alt="" width={80} height={30}></img></li>
                        <li className="list_item"> <img src={appstore1} alt="" width={80} height={30}></img></li>
                            
                    </ul>
                    
                </div>
                    
            </div>
            
        </div>
    </>
}

export default Footer;