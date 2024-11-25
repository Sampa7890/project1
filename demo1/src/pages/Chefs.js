import React from "react";
import img1 from '../image/img1.avif';
import img2 from '../image/img2.avif';
import img3 from '../image/img3.avif';
import img4 from '../image/img4.avif';
import img5 from '../image/img5.avif';
import img6 from '../image/img6.avif';
import three from '../image/pizza3.webp';
import veg11 from '../image/veg11.jpg';
import two from '../image/d2.avif';
import eights from '../image/pizza8.avif';
import veg30 from '../image/veg30.jpg';
import twenty from '../image/pasta2.avif';

import '../style/Chefs.css';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import {TiSocialSkype} from 'react-icons/ti';
import {TiSocialYoutube} from 'react-icons/ti';
import {AiOutlineStar} from 'react-icons/ai';
import {GiChefToque} from 'react-icons/gi';
function Chefs(){
    return<>
        <div className="chef">
            <div className="container">
                <h3 className="center"style={{marginBottom: "10px",fontWeight:"bolder",fontSize:"25px",fontFamily:"'Courgette'", color:"brown"}}><GiChefToque></GiChefToque> Let's Introduce Our Professional Chefs <GiChefToque></GiChefToque> </h3>
                <div className="row">
                    <div className="col">
                        <div class="card  mb-3 chef2" style={{maxWidth: `540px`}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={img1} class="img-fluid rounded-start chef1" alt="..."/>
                                </div>
                                <div class="col-md-8  chef3">
                                    <div class="card-body chef5">
                                        <h5 class="card-title"style={{fontSize:`18px`}}>Jose Andres</h5>
                                        <p class="card-text"style={{fontSize:`12px`,textAlign:`center`,margin:`10px`}}>“Simple ingredients prepared in a simple way – that’s the best way to take your everyday cooking to a gher level.” </p>
                                        <div class="card-footer chef4">
                                            <p class="center"><small class=""><FaInstagramSquare className="icon insta"></FaInstagramSquare>  <FaLinkedin className="icon link"></FaLinkedin> <TiSocialSkype className="icon skype"></TiSocialSkype> <TiSocialYoutube className="icon youtube"></TiSocialYoutube></small></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card  mb-3 chef2" style={{maxWidth: `540px`}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={img2} class="img-fluid rounded-start chef1" alt="..."/>
                                </div>
                                <div class="col-md-8  chef3">
                                    <div class="card-body chef5">
                                        <h5 class="card-title"style={{fontSize:`18px`}}>Paula Deen</h5>
                                        <p class="card-text"style={{fontSize:`12px`,textAlign:`center`,margin:`15px`}}>“I will never use a substitute for butter. Margarine is one molecule away from eating plastic.” </p>
                                        <div class="card-footer chef4">
                                            <p class="center"><small class=""> <TiSocialYoutube className="icon youtube"></TiSocialYoutube> <FaInstagramSquare className="icon insta"></FaInstagramSquare> <BsTwitter className="icon twi"></BsTwitter> <FaLinkedin className="icon link"></FaLinkedin></small></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card mb-3 chef2" style={{maxWidth: `540px`}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={img3} class="img-fluid rounded-start chef1" alt="..."/>
                                </div>
                                <div class="col-md-8 chef3">
                                    <div class="card-body chef5">
                                        <h5 class="card-title"style={{fontSize:`18px`}}>Buddy Valastro</h5>
                                        <p class="card-text"style={{fontSize:`12px`,textAlign:`center`,margin:`10px`}}>“No matter what the recipe, any baker can do wonders in the kitchen with some good ingredients and an upbeat attitude!” </p>
                                        <div class="card-footer chef4">
                                            <p class="center"><small class="">  <TiSocialSkype className="icon skype"></TiSocialSkype> <FaInstagramSquare className="icon insta"></FaInstagramSquare> <BsTwitter className="icon twi"></BsTwitter> <FaLinkedin className="icon link"></FaLinkedin></small></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div class="card  mb-3 chef2" style={{maxWidth: `540px`}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={img4} class="img-fluid rounded-start chef1" alt="..."/>
                                </div>
                                <div class="col-md-8 chef3">
                                    <div class="card-body chef5 ">
                                        <h5 class="card-title"style={{fontSize:`18px`}}>Gordon Ramsay</h5>
                                        <p class="card-text"style={{fontSize:`12px`,textAlign:`center`,margin:`15px`}}>“If you want to become a great chef, you have to work with great chefs. And that’s exactly what I did.” </p>
                                        <div class="card-footer chef4">
                                            <p class="center"><small class="">  <TiSocialSkype className="icon skype"></TiSocialSkype>  <TiSocialYoutube className="icon youtube"></TiSocialYoutube>  <BsTwitter className="icon twi"></BsTwitter> <FaLinkedin className="icon link"></FaLinkedin></small></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card  mb-3 chef2" style={{maxWidth: `540px`}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={img5} class="img-fluid rounded-start chef1" alt="..."/>
                                </div>
                                <div class="col-md-8 chef3">
                                    <div class="card-body chef5 ">
                                        <h5 class="card-title" style={{fontSize:`18px`}}>David Chang</h5>
                                        <p class="card-text"style={{fontSize:`12px`,textAlign:`center`,margin:`15px`}}>“We’re hoping to succeed; we’re okay with failure. We just don’t want to land in between.” </p>
                                        <div class="card-footer chef4">
                                            <p class="center"><small class=""> <FaInstagramSquare className="icon insta"></FaInstagramSquare> <BsTwitter className="icon twi"></BsTwitter>  <TiSocialSkype className="icon skype"></TiSocialSkype> <FaLinkedin className="icon link"></FaLinkedin></small></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card  mb-3 chef2 " style={{maxWidth: `540px`}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={img6} class="img-fluid rounded-start chef1" alt="..."/>
                                </div>
                                <div class="col-md-8 chef3">
                                    <div class="card-body chef5 ">
                                        <h5 class="card-title" style={{fontSize:`18px`}}>Ferran Adria</h5>
                                        <p class="card-text"style={{fontSize:`12px`,textAlign:`center`,margin:`15px`}}>“Risk is to do sometng that 99 percent of the time would be a failure.” </p>
                                        <div class="card-footer chef4">
                                            <p class="center"><small class="">  <TiSocialSkype className="icon skype"></TiSocialSkype> <FaInstagramSquare className="icon insta"></FaInstagramSquare> <BsTwitter className="icon twi"></BsTwitter> <FaLinkedin className="icon link"></FaLinkedin></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <h3 className="center" style={{marginBottom:`6px`,fontSize:`20px`,color:`brown`,fontFamily:`Dancing Script`,fontWeight:`bold`}}>Chef's Specialization</h3>
                <div className="container" style={{display:`flex`,backgroundColor:` rgb(531, 200, 196)`,padding:`5px`,borderRadius:`10px`,borderLeft:`3px solid red`,borderBottom:`4px solid red`}}>
                    <div className="center" style={{display:`flex`}}>
                        <img src={veg11} style={{height:`70px`,width:`70px`, borderRadius:`50px`}}></img>
                        <div style={{paddingLeft:`5px`}}>
                            <div style={{fontWeight:`bolder`,fontFamily:`Fuzzy Bubbles`,fontSize:`18px`,color:`red`,textShadow:`1px 1px black`}}>Jose's Special</div>
                            <div style={{fontFamily:`Lobster`,cursor:`pointer`,color:`green`,fontWeight:`bold`}}>Crispy Panner</div>
                            <div style={{color:`red`}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf></BsStarHalf></div>
                        </div> 
                    </div>
                    <div className="center" style={{display:`flex`}}>
                        <img src={two} style={{height:`70px`,width:`70px`, borderRadius:`50px`}}></img>
                        <div>
                            <div style={{fontWeight:`bolder`,fontFamily:`Fuzzy Bubbles`,fontSize:`18px`,color:`red`,textShadow:`1px 1px black`}}>Paula's Special</div>
                            <div style={{fontFamily:`Lobster`,cursor:`pointer`,color:`green`,fontWeight:`bold`}}>Cheesecake</div>
                            <div style={{color:`red`}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div>
                        </div> 
                    </div>
                    <div className="center" style={{display:`flex`}}>
                        <img src={eights} style={{height:`70px`,width:`70px`, borderRadius:`50px`}}></img>
                        <div>
                            <div style={{fontWeight:`bolder`,fontFamily:`Fuzzy Bubbles`,fontSize:`18px`,color:`red`,textShadow:`1px 1px black`}}>Buddy's Special</div>
                            <div style={{fontFamily:`Lobster`,cursor:`pointer`,color:`green`,fontWeight:`bold`}}>Matka Pizza</div>
                            <div style={{color:`red`}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                        </div> 
                    </div>
                    <div className="center" style={{display:`flex`}}>
                        <img src={veg30} style={{height:`70px`,width:`70px`, borderRadius:`50px`}}></img>
                        <div>
                            <div style={{fontWeight:`bolder`,fontFamily:`Fuzzy Bubbles`,fontSize:`18px`,color:`red`,textShadow:`1px 1px black`}}>Gordon's Special</div>
                            <div style={{fontFamily:`Lobster`,cursor:`pointer`,color:`green`,fontWeight:`bold`}}>Fried Momo</div>
                            <div style={{color:`red`}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf></BsStarHalf></div>
                        </div> 
                    </div>
                    <div className="center" style={{display:`flex`}}>
                        <img src={twenty} style={{height:`70px`,width:`70px`, borderRadius:`50px`}}></img>
                        <div>
                            <div style={{fontWeight:`bolder`,fontFamily:`Fuzzy Bubbles`,fontSize:`18px`,color:`red`,textShadow:`1px 1px black`}}>David's Special</div>
                            <div style={{fontFamily:`Lobster`,cursor:`pointer`,color:`green`,fontWeight:`bold`}}>Pesto Penne Pasta</div>
                            <div style={{color:`red`}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf></BsStarHalf></div>
                        </div> 
                    </div>
                    <div className="center " style={{display:`flex`}}>
                        <img src={three} style={{height:`70px`,width:`70px`, borderRadius:`50px`}}></img>
                        <div >
                            <div style={{fontWeight:`bolder`,fontFamily:`Fuzzy Bubbles`,fontSize:`18px`,color:`red`,textShadow:`1px 1px black`}}>Ferran's Special</div>
                            <div style={{fontFamily:`Lobster`,cursor:`pointer`,color:`green`,fontWeight:`bold`}}>Tandoor Pizza</div>
                            <div style={{color:`red`}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf></BsStarHalf></div>                  
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Chefs;