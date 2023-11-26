import React, { useEffect } from 'react'
import './Navbar.scss'
import logo from './../../assets/logo.png'
import { gapi } from 'gapi-script';
import Login from '../Login/Login';
import Logout from '../Login/Logout';

const clientId = "1084806664064-53fo8kkrt9c9gfql0eo58rkie8nhkdhl.apps.googleusercontent.com"
const Navbar = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:""
        }
      )
    };

    gapi.load('client:auth2' , start)
  });

  // var accessToken = gapi.auth.getToken().access_token;
  return (
      <div className='container1'>
      <div className="left">
              <div className="logo"><img src={logo} alt="" /></div>
              <div className="name">SkyTracker</div>
              <div className="location">Location</div>
          </div>
      <div className="right">
        <Login />
        <Logout/>
          
      </div>
        
        
    </div>
  )
}

export default Navbar
