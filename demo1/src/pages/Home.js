import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../image/banner.jpg";
import '../style/Home.css';
function Home(){
    return<>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`,objectFit:`cover` }} >
            
            <div className="header-container" style={{marginTop:`25px`}}>
                <div className="para">
                    <h1 className="h-primary welcome"> Welcome To <span className="h-primarys">MaddayEats!</span> </h1>
                    <p className="h-secondary" style={{fontFamily:`Dancing Script`}}>Try new that Something Better...</p>
                    <Link to="/Veg">
                        <button type="button" class="btn btn-outline-primary" >Order Now</button>           
                    </Link>
                </div>
            </div>

        </div>
    </>
}
export default Home;