import React, {useState, useEffect} from "react";
import './Hero.css'
import Carts from "../Carts/Carts";
import Navbar from "../Navbar/Navbar";
import cart from '../cart.png'
import CartsBox from "../CartsBox/CartsBox";

function Hero() {

    return(
        <div className="page-container">
            <div className="animation-container">
                <img className="logo-image" src={cart}/>
                <h1 className="logo-header">Cart App</h1>
            </div>
            <Navbar />
            <CartsBox />
                
        </div>
       
        

    )
}

export default Hero