import React, {Component} from "react";
import {BiRupee} from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/Menu.css';
import Blink from 'react-blink-text';

import one from '../image/pizza1.avif';
import two from '../image/pizza2.webp';
import three from '../image/pizza3.webp';
import four from '../image/pizza4.jpg';
import five from '../image/pizza5.webp';
import six from '../image/pizza6.jpg';
import sevens from '../image/pizza7.avif';
import eights from '../image/pizza8.avif';
import nines from '../image/pizza9.avif';
import tens from '../image/pizza10.avif';

import seven from '../image/burger1.jpg';
import eight from '../image/burger2.jpg';
import nine from '../image/burger3.jpg';
import ten from '../image/burger4.webp';
import eleven from '../image/burger5.webp';
import twelve from '../image/burger6.webp';
import b13 from '../image/burger7.avif';
import b14 from '../image/burger8.avif';
import b15 from '../image/burger9.avif';
import b16 from '../image/burger10.avif';

import thirteen from '../image/sand1.avif';
import fourteen from '../image/sand2.avif';
import fifteen from '../image/sand3.avif';
import sixteen from '../image/sand4.avif';
import seventeen from '../image/sand5.avif';
import eighteen from '../image/sand6.avif';
import sand19 from '../image/sand7.jpg';
import sand20 from '../image/sand8.avif';
import sand21 from '../image/sand9.avif';
import sand22 from '../image/sand10.avif';

import nineteen from '../image/pasta1.avif';
import twenty from '../image/pasta2.avif';
import twentyone from '../image/pasta3.avif';
import twentyytwo from '../image/pasta4.jpg';
import twentythree from '../image/pasta5.avif';
import twentyfour from '../image/pasta6.avif';
import pasta25 from '../image/pasta7.avif';
import pasta26 from '../image/pasta8.avif';
import pasta27 from '../image/pasta9.avif';
import pasta28 from '../image/pasta10.avif';


{/*import twentyfive from '../image/noodel1.avif';
import twentysix from '../image/noodel2.avif';*/}


export class Nonveg extends Component {  
    render()  
    {  
      return (  
            <div className="nonveg">  
                <div class='container-fluid' >      
                    <div className="row title" style={{marginBottom: "10px",fontWeight:"bolder",fontSize:"25px",fontFamily:"'Oxygen'", color:"rgb(254, 81, 0)",textShadow:"1px 1px  black"}}>           
                        ~ Have Fun With Nonveg Items ~     
                    </div>  
                </div>  
                <div class='container' >            
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: "10px"}}>  
                        <div class="col">
                            <div class="card h-100">
                                <img src={one} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Pizza Capricciosa</h5>
                                    <p class="card-text"><BiRupee></BiRupee>299<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={two} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>New Item</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Pizza Cheese</h5>
                                    <p class="card-text"><BiRupee></BiRupee>159<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={three} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tandoor Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 177 <small class="text-muted"></small></p>
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
                                <img src={four} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Roman Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={five} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Sicilian Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>299</span> 250 <small class="text-muted"></small></p>
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
                                    <img src={six} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Most prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Stuffed crust Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee>188 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={sevens} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Oven Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>259</span> 199 <small class="text-muted"></small></p>
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
                                <img src={eights} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Matka Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee>179 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={nines} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Greek Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>259</span>199 <small class="text-muted"></small></p>
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
                                    <img src={tens} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Brought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Chicken Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                        <div class="col">
                            <div class="card h-100">
                                <img src={seven} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Slugburger</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={eight} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Most prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Steamed Cheeseburger</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>399</span> 299 <small class="text-muted"></small></p>
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
                                    <img src={nine} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Newly Added</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Whopper</h5>
                                    <p class="card-text"><BiRupee></BiRupee>159 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={ten} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Butter Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee>189 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={eleven} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Salmon Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 159 <small class="text-muted"></small></p>
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
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Caprese Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee>169 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={b13} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Chicken Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={b14} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Falafel Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 149 <small class="text-muted"></small></p>
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
                                    <img src={b15} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Baked Turkey Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee>189 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={b16} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Crab Cake Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 175 <small class="text-muted"></small></p>
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
                                <img src={thirteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">PASTRAMI SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>119 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            
                                <div className="cont">
                                    <img src={fourteen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Most prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">AMERICAN CLUB SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>125 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={fifteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">TUNA SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>178 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={seventeen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">PANINI SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>169</span> 99 <small class="text-muted"></small></p>
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
                                <img src={sixteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">STEAK SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>149 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="card h-100">
                        
                                <div className="cont">
                                    <img src={eighteen} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Newly Added</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">BROADWAY SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>135 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={sand19} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">FALAFEL SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={sand20} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BUFFET SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>179 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={sand21} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BOOKMAKER SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 159 <small class="text-muted"></small></p>
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
                                <img src={sand22} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BANH MI SANDWICH</h5>
                                    <p class="card-text"><BiRupee></BiRupee>189 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                        
                        <div class="col">
                            <div class="card h-100">
                                <img src={nineteen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">PASTA BAKE WITH SAUSAGE</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={twenty} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">PESTO PENNE PASTA</h5>
                                    <p class="card-text"><BiRupee></BiRupee>185 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentyone} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">MASCARPONE PESTO PASTA</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 159 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                
                                <div className="cont">
                                    <img src={twentyytwo} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">CHICKEN PENNE PASTA</h5>
                                    <p class="card-text"><BiRupee></BiRupee>145 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={twentythree} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">FARFALLE PASTA</h5>
                                    <p class="card-text"><BiRupee></BiRupee>115 <small class="text-muted"></small></p>
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
                                <img src={twentyfour} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BRIE MAC AND CHEESE</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 178 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={pasta25} class="card-img-top" alt="..."/>
                                
                                <div class="card-body">
                                    <h5 class="card-title">SPRING PESTO PASTA</h5>
                                    <p class="card-text"><BiRupee></BiRupee>149 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={pasta26} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BUTTERNUT SQUASH LASAGNA</h5>
                                    <p class="card-text"><BiRupee></BiRupee>165 <small class="text-muted"></small></p>
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
                                    <img src={pasta27} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">CARBONARA PASTA</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 149 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={pasta28} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" >ITALIAN PASTA </h5>
                                    <p class="card-text"><BiRupee></BiRupee>135 <small class="text-muted"></small></p>
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
export default Nonveg;