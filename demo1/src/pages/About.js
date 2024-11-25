import React from "react";
import BannerImage from "../image/cover.jpg";
import '../style/About.css';


function About(){
    return<>
        <div className="container">
            <div className="about" style={{ backgroundImage: `url(${BannerImage})` }} ><h1 className="center ">About MaddyEats!</h1></div>
                <div className="aboutbottom center" style={{padding:`5px`}}>
                    
                    <p>
                        There’s nothing cut out about ‘MaddyEats’ . Not our pizzas. Not our kin and our sandwiches. Also, unquestionably not the manner in which we live. Around here, we don’t make do with anything short of food we’re glad to serve. Furthermore, we don’t simply check-in.

                        Not when we can likewise turn into our best, make companions, and have some good times while we’re grinding away. <br></br>We’re the fast-food organization that lives unpacked.

                        {/*’MaddyEats’ was based on the conviction that pizza night ought to be exceptional, and we convey that conviction into all that we do.

                        With over 55 years of experience under our belts, we see how to best serve our clients through time tested administration standards: We make food we’re pleased to serve and convey it fast, with a grin.*/}
                    </p>
                    <div className="fonts" style={{color:`brown`}}>...WHERE WE COME FROM...</div> 
                    <p>

                        In 1958, two friends acquire some money from their mother to open a small eatery put in Wichita, Kansas. They named it ‘MaddyEats’ , in light of the fact that their sign just had space for eight letters. How significant!

                        Before long, the eatery developed. Why? The food was great. The services felt like home. What’s more, the clients were dealt with like family. We’ve been conveying that equivalent food and administration from that point onward.
                    </p>
                    <div className="fonts" style={{color:`brown`}}>...FOR THE LOVE OF PIZZA SINCE 1958...</div>
                    <p>

                        From the very first moment, the friends could look at their clients without flinching and guarantee them the best food around the local area — in light of the fact that they knew the ranchers who developed the fixings, and they realized those agriculturists thought about quality.

                        From that point forward, our agriculturists have developed directly close by us, and the fixings we use are as yet our most noteworthy need. Nobody cherishes food more than ‘MaddyEats’.
                    </p>

                </div>
            
        </div>

        
    </>
}
export default About;