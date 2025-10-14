import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {

  const{getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>

        <div className='multi-fields'>
          <input type="text" placeholder='Enter First Name' />
          <input type="text" placeholder='Enter Last Name' />
        </div>

        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>

        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className='multi-fields'>
          <input type="text" placeholder='Pin code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />

      </div>

      <div className='place-order-right'>

        <div className="cart-total">
          
          <h1>Cart Total</h1>
          <div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Handling Fee</p>
              <p>₹ {getTotalCartAmount()===0?0:4}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:5}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+9}</b>
            </div>

          </div>

          <button>PROCEED TO PAYMENT</button>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
