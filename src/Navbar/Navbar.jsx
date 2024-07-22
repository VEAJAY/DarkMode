import React, { useState } from 'react'

import './Navbar.css'

function Navbar({ setContent, currentContent }) {
  const isActive = (content) => currentContent === content ? 'active' : '';
  
  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1>Dark<span>Mode</span>(Genesis)</h1>
        </div>

        <nav className="menu">
          <ul>
            <li>
              <a href="#" className={isActive('Help')} onClick={() => setContent('Help')}>Help(F1)</a>
            </li>
            <li>
              <a href="#" className={isActive('Sales')} onClick={() => setContent('Sales')}>Sales(1.4)</a>
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
