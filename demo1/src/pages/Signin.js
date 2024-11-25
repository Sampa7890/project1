import {useState} from "react";
import BannerImage from '../image/leaf.jpg';
import thank from '../image/thank.gif';
import {FcApproval} from 'react-icons/fc';
import {Link} from 'react-router-dom';

import '../style/Signup.css';

    function Signin(){
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
                                <div className="container signup">
                                    <div className="row" style={{paddingTop:`0`}}>
                                        <h2 className="center" style={{ paddingBottom:`20px`,fontFamily:`Oxygen`,color:`brown`, textShadow:`1px 1px black`}}>Hey!Login Here!!</h2>
                                        <div className="col-sm-8">
                                            
                                        
                                            <form action=" " /*onSubmit={SubmitForm}*/ className="forms" style={{height:`65vh`,fontSize:`20px`,color:`brown`}}>
                                                <div class="form-group" >
                                                    <label for="exampleInputEmail1" >Name</label>
                                                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name"
                                                    name="name" value={name} 
                                                    onChange={(e)=>setName(e.target.value)}/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                                    name="email" value={email}
                                                    onChange={(e)=>setEmail(e.target.value)}/>
                                                    
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPhone">Mobile Number</label>
                                                    <input type="tel" class="form-control" id="exampleInputMobile" aria-describedby="mobileHelp" placeholder="+914875369485"
                                                    name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} 
                                                    />
                                                    
                                                    
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" aria-describedby="passwordHelp" 
                                                    name="password" value={password}
                                                    onChange={(e)=>setPassword(e.target.value)}/> 
                                                    
                                                    
                                                </div>
                                                <small id=""class="form-text text-muted">We'll never share your Email,Password,Number with anyone else.</small>

                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                                <button type="submit" onClick={login} class="btn btn-primary" style={{width:`80px`}}>Submit</button>
                                            </form>
                                            <div style={{paddingLeft:`20px`}}>
                                                <p >You do not have an account? <a href="#">Create account</a></p>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-4" >
                                            <img src={BannerImage} alt="/" style={{height:`65vh`,width:`25vw`,borderRadius:`10px`}}></img>
                                        </div>
                                    </div>

                                </div>
                                
                            

                                
                            </>
                        ) : 
                        (
                            <>  
                                <div className="container-fluid center forms " style={{height:`15vh`,padding:`10px`,backgroundColor:` rgb(237, 127, 247)`}}>
                                    <h1 style={{fontFamily: `'Courgette'`}}>You  have Successfully logged in <FcApproval></FcApproval></h1>
                                    <Link to="/home"><button type="submit" onClick={logout} class="btn btn-primary " style={{backgroundColor:`orange`, border:`2px solid red`,width:`150px`,color:`black`}}>Take Me Home</button></Link>
                                </div>
                                <div style={{}}>
                                    <img src={thank} style={{width:`100%`, height:`65vh`}}></img>
                                </div>
                                
                            </>
                        )}
                    </>
                )
    }
export default Signin;