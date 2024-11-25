import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './pages/Home';
import Nonveg from './pages/Nonveg';
import Veg from './pages/Veg';
import Drinks from './pages/Drinks';
import Dessert from './pages/Dessert';
import Snacks from './pages/Snacks';
import About from './pages/About';
import Contact from './pages/Contact';
import Specialoffers from './pages/Specialoffers';
import Signin from './pages/Signin';
import Chefs from './pages/Chefs';
import Cartpage from './pages/Cartpage';



function App() {
  return (
    
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Nonveg' element={<Nonveg/>}/>
          <Route exact path='/Veg' element={<Veg/>}/>
          <Route exact path='/Drinks' element={<Drinks/>}/>
          <Route exact path='/Dessert' element={<Dessert/>}/>
          <Route exact path='/Snacks' element={<Snacks/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path='/Contact' element={<Contact/>}/>
          <Route exact path='/Speciality' element={<Specialoffers/>}/>
          <Route exact path='/Signin' element={<Signin/>}/>
          <Route exact path='/Chefs' element={<Chefs></Chefs>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/order1' element={<Nonveg/>}/>
          <Route exact path='/order2' element={<Veg/>}/>
          <Route exact path='/order3' element={<Nonveg/>}/>
          <Route exact path='/order4' element={<Nonveg/>}/>
          <Route exact path='/order5' element={<Veg/>}/>
          <Route exact path='/order6' element={<Nonveg/>}/>
          <Route exact path='/Cartpage' element={<Cartpage/>}/>
        </Routes>
        
        <Footer></Footer>
        
      </Router>
      
    </div>
  );
}

export default App;

