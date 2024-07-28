import React from 'react'

import './Journal.css'

function Journal() {
  return (
    <div>
      <div className="journal-container">

        <div className="first-form">
            <form action="">
                <label htmlFor="">Start Date</label><br />
                <input type="date" className='input-field'/><br /><br /><br />

                <label htmlFor="">End Date</label><br />
                <input type="date" className='input-field'/><br /><br /><br />

                <label htmlFor="">Terminal Number</label><br />
                <input type="number" className='input-field'/><br /><br /><br />

                <label htmlFor="">Search For</label><br />
                <input type="text" className='input-field'/><br /><br /><br />
            </form>
        </div>

        <div className="second-form">
            <form action="">
                <label htmlFor="">First Name</label><br />
                <input type="text" className='input-field'/><br /><br /><br />

                <label htmlFor="">Last Name</label><br />
                <input type="text" className='input-field'/><br /><br /><br />

                <label htmlFor="">Email</label><br />
                <input type="email" className='input-field'/><br /><br /><br />

                <label htmlFor="">Phone Number</label><br />
                <input type="text" className='input-field'/><br /><br /><br />
            </form>
        </div>

        <div className="third-form">
            <form action="">
                <label htmlFor="">Dollar Amount</label><br />
                <input type="text" className='input-field'/><br /><br /><br />

                <label htmlFor="">Last 4 CC#</label><br />
                <input type="number" className='input-field' max='4'/><br /><br /><br />

                <label htmlFor="">CC Type</label><br />
                <select name="" id="" className='input-field'>
                    <option value="" style={{ background: 'black' }}>Master Card</option>
                    <option value="" style={{ background: 'black' }}>Visa</option>
                    <option value="" style={{ background: 'black' }}>Gift Card</option>
                    <option value="" style={{ background: 'black' }}>Credit Card</option>
                    <option value="" style={{ background: 'black' }}>Debit Card</option>
                    <option value="" style={{ background: 'black' }}>Check</option>
                    <option value="" style={{ background: 'black' }}>LBA</option>
                    <option value="" style={{ background: 'black' }}>LAR</option>
                </select>
                <br /><br /><br /><br />

                <button className='input-field search'>Search</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Journal
