import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='nav'>
      <div className='nav_left'>
        <div className='logo'>EDYODA</div>
        <div className='dropdown'>
          <p>Courses</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className='dropdown'>
          <p>Programs</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className='nav_right'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <span>Log In</span>
        <div className='btn btn1'>JOIN NOW</div>
      </div>
    </div>
  )
}

export default Header