import React from "react";
import {Link} from 'react-router-dom';

import img1 from '../image/combo.webp';
import img2 from '../image/combo1.avif';
import img3 from '../image/combo3.avif';
import img4 from '../image/combo1.jpg';
import img5 from '../image/combo2.webp';
import img6 from '../image/combo2.avif';

import '../style/Specialoffers.css';
function Specialoffers(){
    return <>
        <div className="offer">
            <div class="container">
                <div className="row" style={{margin:`0`,padding:`0`}}>
                    <div className="col-10" style={{padding:`0`}}>
                        <div class="row" style={{marginBottom:`20px`}}>
                            <h2 class="h-secondary center" style={{color:`brown`,fontFamily:`Courgette`}}>FLASH OFFERS ON OUR SIGNATURE DISHES</h2>
                            <h6 class="h-secondarys center" style={{paddingBottom:`10px`,color:`brown`,fontFamily:`Courgette`}}> Get Upto 50% off on every purchase</h6>
                            <div class="col cont"> 
                                <img src={img1} alt="..." className="imgs"/>
                                <div class="overlay">
                                    <div class="text2" style={{fontFamily:`Courgette`}}>30% off <br/> <span class="text3" style={{textShadow: `1px 1px black`}}>"on order above &nbsp;199"</span><Link to="/order1"><a href="#" class="btn" id="btn" style={{fontFamily:`Courgette`,padding:`3px`}}>Buy Now</a> </Link></div>
                                </div>
                            </div>
                            <div class="col cont">
                                <img src={img2} alt="..." className="imgs"/>
                                    <div class="overlay">
                                        <div class="text2" style={{fontFamily:`Courgette`}}>Free Mini Pizza <br/> <span class="text3" style={{textShadow: `1px 1px black`}}>"on order above &nbsp;499"</span><Link to="/order2"><a href="#" class="btn" id="btn" style={{fontFamily:`Courgette`,padding:`3px`}}>Buy Now</a></Link></div>
                                        
                                    </div>
                            </div>
                            <div class="col cont">
                                <img src={img3} alt="..." className="imgs"/>
                                    <div class="overlay">
                                        <div class="text2" style={{fontFamily:`Courgette`}}>Free welcome coffe<br/> <span class="text3" style={{textShadow: `1px 1px black`}}>"on order above &nbsp;599"</span> <Link to="/order3"><a href="#" class="btn" id="btn" style={{fontFamily:`Courgette`,padding:`3px`}}>Buy Now</a></Link></div>
                                    </div>
                            </div>
                            
                        </div>
                        <div class="row" style={{marginBottom:`20px`}}>
                            <div class="col cont">
                                <img src={img4} alt="..." className="imgs"/>
                                <div class="overlay">
                                    <div class="text2" style={{fontFamily:`Courgette`}}>Buy 3 & Get 1 Free <br/><Link to="/order4"><a href="#" class="btn" id="btn" style={{fontFamily:`Courgette`,padding:`3px`}}>Buy Now</a></Link></div>
                                </div>
                            </div>
                            <div class="col cont">
                                <img src={img5} alt="..." className="imgs"/>
                                <div class="overlay">
                                    <div class="text2" style={{fontFamily:`Courgette`}}>Buy 2 & Get 2 Free Coke <Link to="/order5"><a href="#" class="btn" id="btn" style={{fontFamily:`Courgette`,padding:`3px`}}>Buy Now</a></Link></div>
                                </div>
                            </div>
                            <div class="col cont">
                                <img src={img6} alt="..." className="imgs"/>
                                <div class="overlay">
                                    <div class="text2" style={{fontFamily:`Courgette`}}>Buy 4 & Pay For 2<br/> <Link to="/order6"><a href="#" class="btn" id="btn" style={{fontFamily:`Courgette`,padding:`3px`}}>Buy Now</a></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2" style={{padding:`0`,marginTop:`40px`}}>
                        <div className="row" style={{ width:`250px`}}>
                            <h5 className="center" style={{marginBottom:`10px`,color:`brown`,fontWeight:`bolder`,fontFamily:`Oxygen`,textShadow:`1px 1px black`}}>"OUR USER FRIENDLY OFFERS"</h5>
                            <div className="row center" style={{marginBottom:`10px`,backgroundColor:`yellow`,borderRadius:`10px`,fontSize:`13px`,border:`2px solid orange`,fontFamily:`Oxygen,cursive`}}>
                                <h6 style={{fontSize:`14px`,fontFamily:`Ubuntu,cursive`}}>GET FLAT 80% OFF ON YOUR FIRST PURCHASE FROM OUR SITE </h6>
                                <p>Apply the promocode <span style={{color:`red`}}>MaddyFirst</span></p>
                            </div>
                            <div className="row center" style={{marginBottom:`10px`,backgroundColor:`yellow`,borderRadius:`10px`,fontSize:`13px`,border:`2px solid orange`,fontFamily:`Oxygen,cursive`}}>
                                <h6  style={{fontSize:`14px`,fontFamily:`Ubuntu,cursive`}}>GET FLAT 100/- OFF FOR FIRST 50 USERS</h6>
                                <p>Apply the promocode <span style={{color:`red`}}>MaddyFirst50</span></p>

                            </div>
                            <div className="row center" style={{marginBottom:`10px`,backgroundColor:`yellow`,borderRadius:`10px`,fontSize:`13px`,border:`2px solid orange`,fontFamily:`Oxygen,cursive`}}>
                                <h6  style={{fontSize:`14px`,fontFamily:`Ubuntu,cursive`}}>GET 70% OFF ON ORDER ABOVE 2999/-</h6>
                                <p>Apply the promocode <span style={{color:`red`}}>Maddy70</span></p>

                            </div>
                            <div className="row center" style={{marginBottom:`10px`,backgroundColor:`yellow`,padding:`3px`,borderRadius:`10px`,fontSize:`13px`,border:`2px solid orange`,fontFamily:`Oxygen,cursive`}}>
                                <h6  style={{fontSize:`14px`,fontFamily:`Ubuntu,cursive`}}>GET EXTRA 10% OFF UPTO 250/-</h6>
                                Applicable for only SBI/CITY/AXIS Bank Debit/Credit Card
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:`yellow`,borderRadius:`10PX`}}>
                    <div className="col CENTER " style={{fontFamily:`Courgette`,color:`brown`}}>
                        <marquee width="100%" direction="left" height="20px">
                            PLACE AN ORDER AVOVE 9,999/- AND GET A CHANCE TO WIN SURPRISE PARTY TREAT ONLY FOR OUR REGULAR CUSTOMERS.
                        </marquee>
                    </div>
                    
                </div>
                
            </div>
            
          
        </div>
    </>
}
export default Specialoffers;