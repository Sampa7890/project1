import React, {Component} from "react";
import {BiRupee} from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/Menu.css';
import one from '../image/dr1.avif';
import two from '../image/dr2.avif';
import three from '../image/dr3.avif';
import four from '../image/dr4.avif';
import five from '../image/dr5.avif';
import six from '../image/dr6.avif';
import seven from '../image/dr7.avif';
import eight from '../image/dr8.avif';
import nine from '../image/dr9.avif';
import ten from '../image/dr10.avif';

import eleven from '../image/dr11.avif';
import twelve from '../image/dr12.avif';
import thirteen from '../image/dr13.avif';
import fourteen from '../image/dr14.avif';
import fifteen from '../image/dr15.avif';
import sixteen from '../image/dr16.avif';
import seventeen from '../image/dr17.avif';
import eighteen from '../image/dr18.avif';
import nineteen from '../image/dr19.avif';
import twenty from '../image/dr20.avif';

import twentyone from '../image/dr21.avif';
import twentytwo from '../image/dr22.avif';
import twentythree from '../image/dr23.avif';
import twentyfour from '../image/dr24.avif';
import twentyfive from '../image/dr25.avif';
import twentysix from '../image/dr26.avif';
import twentyseven from '../image/dr27.avif';
import twentyeight from '../image/dr28.avif';
import twentynine from '../image/dr29.avif';
import thirty from '../image/dr30.avif';


import Blink from 'react-blink-text';

export class Drinks extends Component {  
    render()  
    {  
      return (  
            <div className="drinks">  
                <div class='container-fluid' >      
                    <div className="row title " style={{marginBottom: "10px",fontWeight:"bolder",fontSize:"25px",fontFamily:"'Oxygen'", color:"rgb(3, 49, 255)",textShadow:"1px 1px  black"}}>           
                        ~Enjoy Your Drinks & Stay Hydrated~       
                    </div>  
                </div>  
                <div class='container' >            
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: "10px"}}>  
                        <div class="col">
                            <div class="card h-100">
                               
                                <div className="cont">
                                    <img src={one} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Bellini</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={two} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Sweet Adeline</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 79 <small class="text-muted"></small></p>
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
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Butterbeer</h5>
                                    <p class="card-text"><BiRupee></BiRupee>95 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={four} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Hot Not Toddy</h5>
                                    <p class="card-text"><BiRupee></BiRupee>80 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={five} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Sweet Sunrise</h5>
                                    <p class="card-text"><BiRupee></BiRupee>105 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={six} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"> Green Lemonade</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>129</span> 115 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={seven} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"> Thanksgiving Punch</h5>
                                    <p class="card-text"><BiRupee></BiRupee>120 <small class="text-muted"></small></p>
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
                                    <img src={eight} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Designated Appletini</h5>
                                    <p class="card-text"><BiRupee></BiRupee>105 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={nine} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Orange Julius</h5>
                                    <p class="card-text"><BiRupee></BiRupee>79 <small class="text-muted"></small></p>
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
                                <img src={ten} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lime Rickey</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>139</span> 129 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                        
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={eleven} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Fruity Fuel Co</h5>
                                    <p class="card-text"><BiRupee></BiRupee>85 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={twelve} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Lucky Pulp</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 95 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={thirteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">The Gentle Juice</h5>
                                    <p class="card-text"><BiRupee></BiRupee>79 <small class="text-muted"></small></p>
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
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Flavor Me Fruity</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>109</span> 99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={fifteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Pulp Dose</h5>
                                    <p class="card-text"><BiRupee></BiRupee>109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                              
                                <div className="cont">
                                    <img src={sixteen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Juicy Escape</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>119</span> 109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={seventeen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Genuine Juice</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99<small class="text-muted"></small></p>
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
                                    <img src={eighteen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Sunshine Queen</h5>
                                    <p class="card-text"><BiRupee></BiRupee>105 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={nineteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Vacay Juice</h5>
                                    <p class="card-text"><BiRupee></BiRupee>120 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={twenty} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">The Wellness Recipe</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>119</span> 95 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                    <div class="col">
                            <div class="card h-100">
                                <img src={twentyone} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Melya</h5>
                                    <p class="card-text"><BiRupee></BiRupee>97 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentytwo} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Caffè Marocchino</h5>
                                    <p class="card-text"><BiRupee></BiRupee>109 <small class="text-muted"></small></p>
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
                                    <img src={twentythree} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Affogato al caffè</h5>
                                    <p class="card-text"><BiRupee></BiRupee>129 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                              
                                <div className="cont">
                                    <img src={twentyfour} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}> Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Babyccino</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>129</span> 109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentyfive} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Palazzo</h5>
                                    <p class="card-text"><BiRupee></BiRupee>119 <small class="text-muted"></small></p>
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
                                <img src={twentysix} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Vanilla special</h5>
                                    <p class="card-text"><BiRupee></BiRupee>109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentyseven} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Cool mint</h5>
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
                                    <img src={twentyeight} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Strawberry marshallow</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentynine} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Blueberry cheesecake</h5>
                                    <p class="card-text"><BiRupee></BiRupee>119 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={thirty} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Pina colada</h5>
                                    <p class="card-text"><BiRupee></BiRupee>105 <small class="text-muted"></small></p>
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
export default Drinks;