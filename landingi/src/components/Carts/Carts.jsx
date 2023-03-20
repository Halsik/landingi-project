import React, {useState} from "react";
import LineChart from "../LineChart/LineChart";
import './Carts.css'

function Carts(props) {


  // Modal State
    const [modal, setModal] = useState(false);

  // check if modal should be open
    const toggleModal = () => {
        setModal(!modal);
      };

  // products
    const [products, setProducts] = useState(props.products)
  // Map products
    const newProducts = products.map(item => {
       return ( <div className="modal-list-table">
       <div className="table-title">{item.title}</div>
       <div className="table-each">{item.price}$</div>
       <div className="table-total">{item.total}$</div>
       <div className="table-disc">{item.discountedPrice}$</div>
  </div>
       )
    })


    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
      
    return(
        <div onClick={toggleModal} className="oneCart">
            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
                <h1>Cart {props.id}</h1>
            </div>
            <div className="modal-products-box">
                <div className="modal-list">
                   <div className="modal-list-table show">
                        <div className="table-title">Product</div>
                        <div className="table-each">Price/each</div>
                        <div className="table-total">Total</div>
                        <div className="table-disc">Total Discounted</div>
                   </div>
                   
                    {newProducts}
                    <div className="checkout">
                        <p>Total without discount: {props.totalValue}$ </p>
                        <p>Total with discount: {props.totalValueDisc}$</p>
                    </div>
                </div>
                <div className="modal-chart">
                    <LineChart 
                    data={products}/>
                </div>
            </div>
          </div>
        </div>
      )}
        
            <div className="cart-info">Cart number {props.id}</div>
            
        </div>
    )
}

export default Carts