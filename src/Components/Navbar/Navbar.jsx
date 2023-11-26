import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
      <div className='container1'>
          <div className="left">
              <div className="name">SkyTracker</div>
              <div className="location">Location</div>
          </div>
          <div className="right">
              <button className='login'>LogIn</button>
              <button className='signup'>SignUp</button>
          </div>
        
        
    </div>
  )
}

export default Navbar
