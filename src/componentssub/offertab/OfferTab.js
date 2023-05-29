import React from 'react'
import './offerTab.scss'

const OfferTab = ({ price, monthprice, recommended, disabled, months, onClick, activeComp }) => {
  return (
    <div className={activeComp && !disabled ? 'offertab active' : 'offertab'} onClick={onClick}>
      <div className={activeComp && !disabled ? 'radio_button active_button' : 'radio_button'}>{activeComp && <i className="fa-sharp fa-solid fa-check"></i>} </div>
      <div className='offer'>
        <p className='offer_description'>{months} Months Subscription</p>
        <div className='offer_price'>
          <p className='offer_total'>Total &nbsp;<span className='disc_price'>₹{price}</span></p>
          <p className='offer_monthly'>₹{monthprice} <span className='mon_text'> /mo</span></p>
        </div>
      </div>
      {disabled && <div className='disabled'></div>}

      {disabled &&
        <div className='expired'><p className='tag_text'>Offer Expired</p></div>
      }
      {recommended &&
        <div className='recommended'><p className='tag_text'>Recommended</p></div>
      }
    </div>
  )
}

export default OfferTab