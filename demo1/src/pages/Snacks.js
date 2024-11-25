import React, {Component} from "react";
import {BiRupee} from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/Menu.css';
import one from '../image/sn1.avif';
import two from '../image/sn2.avif';
import three from '../image/sn3.avif';
import four from '../image/sn4.avif';
import five from '../image/sn5.avif';
import six from '../image/sn6.avif';
import seven from '../image/sn7.avif';
import eight from '../image/sn8.avif';
import nine from '../image/sn9.avif';
import ten from '../image/sn10.avif';
import eleven from '../image/sn11.avif';
import twelve from '../image/sn12.avif';
import thirteen from '../image/sn13.avif';
import fourteen from '../image/sn14.avif';
import fifteen from '../image/sn15.avif';
import sixteen from '../image/sn16.jpg';
import seventeen from '../image/sn17.avif';

import Blink from 'react-blink-text';



export class Snacks extends Component {  
    render()  
    {  
      return (  
            <div className="snacks">  
                <div class='container-fluid' >      
                    <div className="row title" style={{marginBottom: "10px",fontWeight:"bolder",fontSize:"25px",fontFamily:"'Oxygen'", color:" rgb(151, 173, 7)",textShadow:"1px 1px  black"}}>           
                        ~Take A Break & Enjoy Snacks~      
                    </div>  
                </div>  
                <div class='container' >            
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: "10px"}}>  
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={one} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Nankhatai</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={two} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Medu Vada</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 90 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={three} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Khandvi</h5>
                                    <p class="card-text"><BiRupee></BiRupee>79<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={four} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Spinach Peas Patties</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 85 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={five} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Shami Kabab</h5>
                                    <p class="card-text"><BiRupee></BiRupee>79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={fifteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tandoori Mushroom</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 89 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                        
                        <div class="col">
                            <div class="card h-100">
                                <img src={six} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Cheese Balls</h5>
                                    <p class="card-text"><BiRupee></BiRupee>80 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={seven} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Shankarpali</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={eight} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Mathri</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={nine} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Paniyaram</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>90</span>79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={ten} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Cheddar Biscuits</h5>
                                    <p class="card-text"><BiRupee></BiRupee>79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={sixteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Bajra Vada</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 89 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                    <div class="col">
                            <div class="card h-100">
                                <img src={eleven} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Bread Roll</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={twelve} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Kothimbir Vadi</h5>
                                    <p class="card-text"><BiRupee></BiRupee>95 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={thirteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Veggie Nuggets</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 89 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={fourteen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Poha Cutlet</h5>
                                    <p class="card-text"><BiRupee></BiRupee>91 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={fifteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Spinach Fritters</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>90</span> 79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={seventeen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Masala Pav</h5>
                                    <p class="card-text"><BiRupee></BiRupee>89 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='15'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>  
                </div>  
            </div>  
        )  
    }  
}  
export default Snacks;