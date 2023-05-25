import React from 'react'
import logo from '../images/logo192.png';
function Header() {
  return (
    <div className='pt-3 pl-2 text-center'>
        <img src={logo} style={{height: "35px", verticalAlign:"top"}} alt=''/>&nbsp;{"  "}
        <span className='h2 pt-4 text-white-50'>Travelopedia</span>
    </div>
  )
}

export default Header