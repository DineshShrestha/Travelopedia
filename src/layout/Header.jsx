import React from 'react'
function Header() {
  return (
    <div className='pt-3 pl-2 text-center'>
        <i className='bi bi-compass text-success' style={{fontSize: "2rem", verticalAlign:"middle"}}></i>
        {"  "}
        <span className='h2 text-white-50' style={{verticalAlign:"middle"}}>Travelopedia</span>
    </div>
  )
}

export default Header