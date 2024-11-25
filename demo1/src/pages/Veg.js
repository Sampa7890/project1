import React, {Component} from "react";
import {BiRupee} from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/Menu.css';
import veg1 from '../image/veg1.jpg';
import veg2 from '../image/veg2.jpg';
import veg3 from '../image/veg3.jpg';
import veg4 from '../image/veg4.jpg';
import veg5 from '../image/veg5.avif';
import veg6 from '../image/veg6.jpg';
import veg7 from '../image/veg7.jpg';
import veg8 from '../image/veg8.jpg';
import veg9 from '../image/veg9.avif';
import veg10 from '../image/veg10.jpg';
import veg11 from '../image/veg11.jpg';
import veg12 from '../image/veg12.jpg';
import veg13 from '../image/veg13.avif';
import veg14 from '../image/veg14.avif';
import veg15 from '../image/veg15.avif';
import veg16 from '../image/veg16.avif';
import veg17 from '../image/veg17.avif';
import veg18 from '../image/veg18.avif';
import veg19 from '../image/veg19.webp';
import veg20 from '../image/veg20.jpg';
import veg21 from '../image/veg21.webp';
import veg22 from '../image/veg22.webp';
import veg23 from '../image/veg23.webp';
import veg24 from '../image/veg24.jpg';
import veg25 from '../image/veg25.avif';
import veg26 from '../image/veg26.jpg';
import veg27 from '../image/veg27.jpg';
import veg28 from '../image/veg28.jpg';
import veg29 from '../image/veg29.jpg';
import veg30 from '../image/veg30.jpg';

import Blink from 'react-blink-text';


export class Veg extends Component {  
    render()  
    {  
      return (  
            <div className="veg">  
                <div class='container-fluid' >      
                    <div className="row title" style={{marginBottom: "10px",fontWeight:"bolder",fontSize:"25px",fontFamily:"'Oxygen'", color:"green",textShadow:"1px 1px  greenyellow"}}>           
                       ~ Our Specialized Veg Items ~
                       
                    </div>

                </div>  
                <div class='container' >            
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={2} style={{marginBottom: "10px"}}>  
                        <div class="col">
                            <div class="card h-100" >
                                <img src={veg1} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Roasted Sandwich</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
 

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg2} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Spring Roll</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg3} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Vegetable Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>149</span> 99 <small class="text-muted"></small>
                                    
                                    </p>
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
                                    <img src={veg4} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Vegetable Roll</h5>
                                    <p class="card-text"><BiRupee></BiRupee>55<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg5} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Spicy Hakka Chaw</h5>
                                    <p class="card-text"><BiRupee></BiRupee>90 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg6} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Chilli Balls</h5>
                                    <p class="card-text"><BiRupee></BiRupee>80 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg7} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Tomato Soup pasta</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>149</span> 135 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg8} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Veg Noodles</h5>
                                    <p class="card-text"><BiRupee></BiRupee>90 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg9} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Pasta Donus</h5>
                                    <p class="card-text"><BiRupee></BiRupee>125<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg10} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Panner Tikka Masala</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>179</span> 159 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
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
                                <div className="cont">
                                    <img src={veg11} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Crispy Panner</h5>
                                    <p class="card-text"><BiRupee></BiRupee>155<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg12} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Potato Tikka Masala</h5>
                                    <p class="card-text"><BiRupee></BiRupee>135<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg13} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Trending</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Tomato Pasta</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>189</span> 169 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg14} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Veg Salad</h5>
                                    <p class="card-text"><BiRupee></BiRupee>70 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg15} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Panir Pasinda</h5>
                                    <p class="card-text"><BiRupee></BiRupee>139 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg16} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Veggy Stuffed Bread</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg17} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Cookie Cakes</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>129</span> 75 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg18} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Garlic Flavoured Chaw</h5>
                                    <p class="card-text"><BiRupee></BiRupee>85 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg19} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Fried Bread with Panner </h5>
                                    <p class="card-text"><BiRupee></BiRupee>79<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg20} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Veg Laddo Balls</h5>
                                    <p class="card-text"><BiRupee></BiRupee>89 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel items={6} className="owl-theme" loop nav margin={8} >
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg21} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Soup with Rice Balls</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>110</span> 99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg22} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Frequently Bought</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Veg Stuffed Sushi</h5>
                                    <p class="card-text"><BiRupee></BiRupee>125 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg23} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"> Cheesee Papad Chat</h5>
                                    <p class="card-text"><BiRupee></BiRupee>99 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg24} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">  Veg Panner Pizza</h5>
                                    <p class="card-text"><BiRupee></BiRupee>199<small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg25} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Best Seller</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"> Sushi</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 175 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg26} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"> Nut Noodles</h5>
                                    <p class="card-text"><BiRupee></BiRupee>129 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg27} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Pan Fried Tikka </h5>
                                    <p class="card-text"><BiRupee></BiRupee>119 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg28} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}>Mostly Prefered</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Tangy Burger</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>199</span> 179 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
                                            Testing the Blink
                                        </Blink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={veg29} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Chocolate Rice Balls</h5>
                                    <p class="card-text"><BiRupee></BiRupee>89 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div className="cont">
                                    <img src={veg30} class="card-img-top" alt="..."/>
                                    <div class=" overlay">
                                        <h5 class="card-title" style={{padding:`10px`,color:`yellow`,textShadow:`1px 1px black`}}></h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Fried Momo</h5>
                                    <p class="card-text"><BiRupee></BiRupee><span style={{textDecoration: `line-through`, color:`black`}}>149</span> 109 <small class="text-muted"></small></p>
                                    <a href="#" class="btn" id="btn">Add to Cart</a>
                                    <span style={{fontSize:`15px`,fontWeight:`bolder`,fontFamily:`Helvetica Neue`}}>
                                        <Blink color='red' text='*Limited Time Offer' fontSize='10'  >
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
export default Veg;