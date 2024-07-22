import React from 'react'

import './Sales.css'

function Sales() {
  return (
    <>
      <div className="form-container">
        <form action="POST">

        <label htmlFor="">Item Number (UPC):</label><br />
        <input type="phone" className='input-field' /><br /><br /><br />

        <label htmlFor="">Quantity:</label><br />
        <input type="number" className='input-field' min="0" defaultValue="1" /><br /><br /><br />

        <label htmlFor="">Model Number:</label><br />
        <input type="text" className='input-field' /><br /><br /><br />

        <label for="cars">Load Indicator:</label><br />
          <select id="load" name="load" className='input-field'>
            <option value="CW">CW (Carry With)</option>
            <option value="NL">NL (Not Loaded)</option>
            <option value="PL">PL (Pickup Later)</option>
            <option value="LD">LD (Lowes Delivery)</option>
        </select><br /><br /><br />

        <label htmlFor="">Pickup / Delivery Date:</label><br />
        <input type="date" className='input-field' /><br /><br /><br />

        <h3>Customer Lookup</h3><br />

        <label htmlFor="">Phone Number:</label><br />
        <input type="phone" className='input-field' /><br /><br /><br />

        <label htmlFor="">Email:</label><br />
        <input type="email" className='input-field' /><br /><br /><br />

        <h3 style={{color: 'greenyellow'}}>**Scan the QR code <br /> in the app to claim rewards</h3><br /><br />

        <label htmlFor="">Comments:</label><br />
        <textarea name="" id="" className='input-field' cols="35" rows="10"></textarea>

        <div className='btn-container'>
          <button>Process(F9)</button>
        </div>
        
        </form>
      </div>
      
      </>
      
  )
}

export default Sales
