import React from 'react'
function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-secondary-subtle shadow-sm sticky-top">
      <div className="container">
        <span className="navbar-brand d-flex align-items-center gap-2 mb-0">
          <i className="bi bi-compass text-success fs-3"></i>
          <span className="fw-semibold fs-4">Travelopedia</span>
        </span>
      </div>
    </nav>
  )
}

export default Header