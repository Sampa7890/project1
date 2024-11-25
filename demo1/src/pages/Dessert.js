import React, {Component} from "react";
import {BiRupee} from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/Menu.css';
import one from '../image/d1.avif';
import two from '../image/d2.avif';
import three from '../image/d3.avif';
import four from '../image/d4.avif';
import five from '../image/d5.avif';
import six from '../image/d6.avif';
import seven from '../image/d7.avif';
import eight from '../image/d8.avif';
import nine from '../image/d9.avif';
import ten from '../image/d10.avif';

import eleven from '../image/d11.avif';
import twelve from '../image/d12.avif';
import thirteen from '../image/d13.avif';
import fourteen from '../image/d14.avif';
import fifteen from '../image/d15.avif';
import sixteen from '../image/d16.avif';
import seventeen from '../image/d17.avif';
import eighteen from '../image/d18.avif';
import nineteen from '../image/d19.avif';
import twenty from '../image/d20.avif';

import twentyone from '../image/d21.avif';
import twentytwo from '../image/d22.avif';
import twentythree from '../image/d23.avif';
import twentyfour from '../image/d24.avif';
import twentyfive from '../image/d25.avif';
import twentysix from '../image/d26.avif';
import twentyseven from '../image/d27.avif';
import twentyeight from '../image/d28.avif';
import twentynine from '../image/d29.avif';
import thirty from '../image/d30.avif';

import Blink from 'react-blink-text';

export class Dessert extends Component {  
    render()  
    {  
      return (  
            <div className="dessert">  
                <div class='container-fluid' >      
                    <div className="row title" style={{marginBottom: "10px",fontWeight:"bolder",fontSize:"25px",fontFamily:"'Oxygen'", color:"rgb(228, 2, 213)",textShadow:"1px 1px  black"}}>
                        ~Desert In Need!Desert In Deed!~  
                    </div>  
                </div>  
                <div class='container' >            
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: "10px"}}>  
                        <div class="col">
                            <div class="card h-100">
                                <img src={one} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Chocolate Cake</h5>
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
                                    <img src={two} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Cheesecake</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>95</span> 90 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={three} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Red Velvet Cake</h5>
                                    <p class="card-text"><BiRupee></BiRupee>75 <small class="text-muted"></small></p>
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
                                    <img src={four} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Vanilla</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 85 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={five} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Ice Cream Cake</h5>
                                    <p class="card-text"><BiRupee></BiRupee>75 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={six} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Sponge Cake</h5>
                                    <p class="card-text"><BiRupee></BiRupee>69 <small class="text-muted"></small></p>
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
                                    <h5 class="card-title">Devil's Food Cake</h5>
                                    <p class="card-text"><BiRupee></BiRupee>75 <small class="text-muted"></small></p>
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
                                <img src={eight} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Genoise Cake</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={nine} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Biscuit Cake</h5>
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
                        <div class="col">
                            <div class="card h-100">
                                <img src={ten} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Baked Flourless Cake</h5>
                                    <p class="card-text"><BiRupee></BiRupee>65 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: `10px`}} >
                        
                        <div class="col" >
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={eleven} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Amazing Glaze Doughnut</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 88 <small class="text-muted"></small></p>
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
                                <img src={twelve} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Sweet Cheeks Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee>90 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={thirteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Hole In One Donuts</h5>
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
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Marry Me Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={fifteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Oh So Jelly Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee>75 <small class="text-muted"></small></p>
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
                                    <img src={sixteen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Filled Up Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee>80 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={seventeen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Happy Hour Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>105</span> 89 <small class="text-muted"></small></p>
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
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Delicious Hole Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={nineteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lifeline Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee>85<small class="text-muted"></small></p>
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
                                    <img src={twenty} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Sweet Tooth Donuts</h5>
                                    <p class="card-text"><BiRupee></BiRupee>95 <small class="text-muted"></small></p>
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
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: `10px`}}>
                    <div class="col">
                            <div class="card h-100">
                                <img src={twentyone} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Icy Wonderland</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>90</span> 79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentytwo} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Milky Scoops</h5>
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
                                    <img src={twentythree} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">The Creamery Factory</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>99</span> 75 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentyfour} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">The Dairy Corner</h5>
                                    <p class="card-text"><BiRupee></BiRupee>70 <small class="text-muted"></small></p>
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
                                <img src={twentyfive} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Sugar Boulevard</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>89</span> 75 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentysix} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Have A Scoop</h5>
                                    <p class="card-text"><BiRupee></BiRupee>75 <small class="text-muted"></small></p>
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
                                    <img src={twentyseven} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Frostbite Ice Cream</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>79</span> 70 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentyeight} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">The Creamery House</h5>
                                    <p class="card-text"><BiRupee></BiRupee>79 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={twentynine} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Frozen Bar</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>80</span> 75 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={thirty} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">The Dessert House</h5>
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
                    </OwlCarousel>  
                </div>  
            </div>  
        )  
    }  
}  
export default Dessert;