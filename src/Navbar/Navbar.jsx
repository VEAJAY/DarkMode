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
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
          </ul>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar
