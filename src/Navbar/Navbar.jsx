import React from 'react'

import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1>Dark<span>Mode</span></h1>
        </div>

        <nav className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Logistics(6.2)</a>
            </li>
            <li>
              <a href="#">Journal(3.4)</a>
            </li>
            <li>
              <a href="#">Reports(9.5)</a>
            </li>
          </ul>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar
