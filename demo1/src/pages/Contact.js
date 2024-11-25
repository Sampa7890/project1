import {useState} from "react";
import {Link} from 'react-router-dom';
import {FcApproval} from 'react-icons/fc';
import contact from '../image/contact.avif';
import '../style/Contact.css';
import {MdWifiCalling3} from 'react-icons/md';
import {SiGooglemessages} from 'react-icons/si';
import {ImMail} from 'react-icons/im';
import thank from '../image/contact.jpg';
function Contact(){
        const [name,setName]=useState('');
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [mobile,setMobile]=useState('');
        const [isLoggedin,setIsLoggedin]=useState(false);

        const login =(e) => {
            e.preventDefault();
            console.log(name,email,mobile,password);
            const userData= {
                name,
                email,
                mobile,
                password,
            };
            localStorage.setItem('token-info', JSON.stringify(userData));
            setIsLoggedin(true);
            setName('');
            setEmail('');
            setMobile('');
            setPassword('');
        };
        const logout =() =>{
            localStorage.removeItem('token-info');
            setIsLoggedin(false);
        };
    return(
        <>
            {!isLoggedin ? (
                <>
        
                    <div className="contact" style={{ backgroundImage: `url(${contact})` }} >
                        <h2 className="center heading" >Contact Us On Your Party Days</h2>
                        <div className="row">
                            <div className="col-md-9" style={{paddingLeft:`300px`,fontFamily:`Lobster`}}>
                                <form >
                                    <div className="form">
                                        <div class="mb-1" >
                                            <label for="exampleFormControlInput1" class="form-label" style={{paddingLeft:`10px`}}>Enter Your Name</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Kumar Gorgy" name="name" value={name} 
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                        </div>
                                        <div class="mb-1">
                                            <label for="exampleFormControlInput1" class="form-label" style={{paddingLeft:`10px`}}>Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                                name="email" value={email}
                                                onChange={(e)=>setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div class="mb-1">
                                            <label for="exampleFormControlInput1" class="form-label" style={{paddingLeft:`10px`}}>Phone Number</label>
                                            <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="915874269812"
                                                name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}
                                            />
                                        </div>
                                        <div class="mb-1">
                                            <label for="exampleFormControlInput1" class="form-label" style={{paddingLeft:`10px`}}>Enter Your Date for Your Party</label>
                                            <input type="datetime-local" class="form-control" name="datetime" id="exampleFormControlInput1" />
                                        </div>
                                        <div class="mb-1">
                                            <label for="exampleFormControlInput1" class="form-label" style={{paddingLeft:`10px`}}>Enter Your Address</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="flatNo,Landmark,city,state"/>
                                        </div>
                                        <div class="mb-1">
                                            <label for="exampleFormControlTextarea1" class="form-label" style={{paddingLeft:`10px`}}>Enter Your Text</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="center">
                                            <button type="submit" class="btn btn-outline-warning " onClick={login} style={{backgroundColor:`brown`, color:`white`}}>Submit</button>
                                            <button type="button" class="btn btn-outline-warning" style={{backgroundColor:`brown`, color:`white`}}>Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3 " style={{height:`150px`,marginRight:`20px`,width:`250px`,marginTop:`350px`}}>
                                <div className="center" style={{padding:`5px`,border:`2px solid red`,borderRadius:`10px`,fontWeight:`bold`,fontFamily:`Lobster`,color:`brown`,backgroundColor:`whitesmoke`}}>
                                    <div className="">Call Us <MdWifiCalling3 className="icon" style={{color:`green`}}></MdWifiCalling3> 8579463274</div>
                                    <div>Mail Us <ImMail className="icon" style={{color:`red`}}></ImMail> maddyeats@gmail.com</div>
                                    <div>Chat With Us <SiGooglemessages className="icon" style={{color:`blue`}}></SiGooglemessages></div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </>
            ):
            (
                <>
                    <div className="container-fluid">
                        <div className="container-fluid center forms " style={{height:`15vh`,padding:`10px`,backgroundColor:` rgb(237, 127, 247)`}}>
                            <h1 style={{fontFamily: `'Courgette'`}}>Successfully Submitted  <FcApproval></FcApproval></h1>
                            <Link to="/home"><button type="submit" onClick={logout} class="btn btn-primary " style={{backgroundColor:`orange`, border:`2px solid red`,width:`150px`,color:`black`}}>Take Me Home</button></Link>
                        </div>
                        <div style={{display:`flex`}} className="container">
                            <img src={thank} style={{width:`50%`, height:`65vh`}}></img>
                            <div className="center" style={{padding:`110px`,fontSize:`25px`,color:`red`,textShadow:`1px 1px black`,fontFamily:`cursive`}}>We got your records Successfully.We'll contact with you within 24hrs via Mail or calls.<div className="center">Thank You.<sub>~Team MaddyEats!</sub></div></div>
                        </div>

                    </div>
                </>

            )}
        </>
    )
}
export default Contact;
