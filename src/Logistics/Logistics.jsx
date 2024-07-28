import React from 'react'

import './Logistics.css'

function Logistics() {
  return (
    <div>
      <div className="logic-screen">
        <div className="inner-screen">

            <div className="po-entry">
                <label htmlFor="">PO Number: </label>
                <input type="phone" className='input-field'/>
            </div>

            <div className="po-options">
                <ol>
                    <li>
                        <h3>1. Receive New PO</h3><br /><br />
                    </li>
                    <li>
                        <h3>2. View PO Status/ Print Tally Sheets</h3><br /><br />
                    </li>
                    <li>
                        <h3>3. View/Modify RTM Worklist</h3><br /><br />
                    </li>
                    <li>
                        <h3>4. Apply RDC Truck</h3><br /><br />
                    </li>
                </ol>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Logistics
