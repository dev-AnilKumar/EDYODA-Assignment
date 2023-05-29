import React, { useState } from 'react'
import './paymentTab.scss'
import OfferTab from '../../componentssub/offertab/OfferTab'
import clockerror from '../../assets/Icon Clock.png'
import razorpay from '../../assets/Razorpay Icon.png'

const PaymentTab = () => {

  const [activeElement, setActiveElement] = useState(1);
  const [activePrice, setActivePrice] = useState(179);

  const updateActiveElement = (id) => {
    setActiveElement(activeElement !== id ? id : 1);
  }
  const updatePrice = (price) => {
    setActivePrice(price)
  }
  let discprice = 18500 - activePrice;

  return (
    <div className='form'>
      <div className='progress_bar'>
        <div className='stage'>
          <div className='number'>1</div>
          <p className='text_stage'>Sign Up</p>
        </div>
        <div className='stage'>
          <div className='number'>2</div>
          <p className='text_stage'>Subscribe</p>
        </div>
      </div>
      <h3 className='form_header'>Select your Subscription plan</h3>
      <div className='input_container'>
        <OfferTab months={12} price={99} monthprice={8} disabled />
        <OfferTab months={12} price={179} monthprice={15} recommended activeComp={1 === activeElement} onClick={() => {
          updateActiveElement(1)
          updatePrice(179)
        }} />
        <OfferTab months={6} price={149} monthprice={25} activeComp={2 === activeElement} onClick={() => {
          updateActiveElement(2)
          updatePrice(149);
        }} />
        <OfferTab months={3} price={99} monthprice={33} activeComp={3 === activeElement} onClick={() => {
          updateActiveElement(3)
          updatePrice(99)
        }} />
      </div>

      <div className='summary'>
        <hr />
        <div className='summary_container'>
          <div className='fee_container'>
            <p className='text_stage'>Subscription Fee</p>
            <p className='text_stage price'>₹18,500</p>
          </div>
          <div className='alert'>
            <div className='alert_heading'>
              <p className='limited_offer'>Limited Time Offer</p>
              <p className='discpricez'>- ₹{discprice}</p>
            </div>
            <div className='alert_body'>
              <img src={clockerror} alt='' />
              <p className='offer_random'>Offer valid till 25th March 2023</p>
            </div>
          </div>
          <div className='fee_container' >
            <p className='text_stage'><span className='total'>Total </span>(incl. of 18% GST)</p>
            <p className='activeprice'>₹{activePrice} </p>
          </div>
        </div>

      </div>
      <div className='bttons'>
        <div className='btn btn2'><span className='btn_text'>CANCEL</span></div>
        <div className='btn btn3'><span className='btn_text'>PROCEED TO PAY</span></div>
      </div>
      <div className='razor_img'>
        <img src={razorpay} alt='' /></div>
    </div>
  )
}

export default PaymentTab