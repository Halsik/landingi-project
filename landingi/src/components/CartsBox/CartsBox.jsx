import React, {useState, useEffect} from "react"; 
import Carts from "../Carts/Carts";
import './CartsBox.css'


function CartsBox() {

     // Api State
     const [api, setApi] = useState([])
   

     // Get Carts

     useEffect(() => {
         fetch('https://dummyjson.com/carts')
         .then(res => res.json())
         .then(data => setApi(data.carts))
     }, [])
     
     // Map new Carts
     
     const newCarts = api.map(item => {
        return <Carts 
        id={item.id}
        products={item.products}
        totalValue={item.total}
        totalValueDisc={item.discountedTotal}/>
     })
 
    return(
        <div className="CartsBox-container">
            <div className="header-box">
                <h1>All Carts</h1>
            </div>
            <div className="allCarts">
                {newCarts}
            </div>
               
        </div>
    )
}

export default CartsBox