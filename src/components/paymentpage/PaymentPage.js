import React from 'react'
import './paymentPage.scss'
import PaymentTab from '../paymenttab/PaymentTab'
import group16 from '../../assets/Group 16.png'
import group17 from '../../assets/Group 17.png'
import group19 from '../../assets/Group 19.png'
import group20 from '../../assets/Group 20.png'
import Icon from '../../assets/Icon.png'


const PaymentPage = () => {
  return (
    <div className='paymentpage'>
      <div className='payment_container'>
        <div className='payment_text'>
          <h2>Access curated courses worth ₹ <del className='text_heading'>18,500</del> at just<span className='color_text text_heading'> ₹ 99 </span>per year!</h2>
          <div className='para'>
            <img src={group20} alt='' />
            <p className='para_text'> <span className='color_text'>100+ </span>Job relevant courses</p>
          </div>
          <div className='para'>
            <img src={group19} alt='' />
            <p className='para_text'> <span className='color_text'>20,000+ </span>Hours of content live</p>
          </div>
          <div className='para'>
            <img src={group16} alt='' />
            <p className='para_text'> <span className='color_text'>Exclusive </span>webinar access</p>
          </div>
          <div className='para'>
            <img src={group17} alt='' />
            <p className='para_text'>Scholarship worth <span className='color_text'>₹94,500</span></p>
          </div>
          <div className='para'>
            <img src={Icon} alt='' />
            <p className='para_text'><span className='color_text'>Ad Free </span>learning experience</p>
          </div>
        </div>
        <div className='paymenttab'>
          <PaymentTab />
        </div>
      </div>
    </div>
  )
}

export default PaymentPage