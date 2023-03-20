import React, {useState, useEffect} from "react"; 
import './Navbar.css'
import cart from '../cart.png'

function Navbar() {

    const [modal, setModal] = useState(false);

    const [newProducts, setNewProducts] = useState([])
    const [productsArray, setProductsArray] = useState([])
  
    return(
        <div className="navbar-container">
           
                <img className="navbar-image" src={cart}/>
                <h1 className="navbar-header">Cart App</h1>
        </div>
    )
}

export default Navbar