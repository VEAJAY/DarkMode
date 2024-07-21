import React from 'react'

import './Help.css'

function Help() {
  return (
    <div>
      <ul className='help-list'>
        <li>
          <p>
            1.4 - <span className='title'>Sales:</span> Checkout screen for totaling transactions. Please set the load indicators for correct use: CW(carry with), NL(not loaded), PL(pickup later), LD(lowes delivery).SOE and WEX orders are NOT available in Dark Mode. Use Manual Order in Red Vest and transmit PO to vendor
          </p>
        </li>
        <li>
          <p>
            6.2 - <span className='title'>Logistics:</span> Receiving screen for receiving PO, checking the status of special order product, printing tally sheet for PO, and viewing/modifying the RTM worklist. Applying the truck can also be done in 6.2. <span className='important'>NOTE: PLEASE APPLY TRUCK ONLY WHEN FREIGHT HAS ARRIVED! </span>Applying the load too late or early can negatively affect store on hands
          </p>
        </li>
        <li>
          <p>
            3.4 - <span className='title'>Journals:</span> View receipt jopurnals within the last 3 months, transaction accounts in cash, check and credit accounts. DL numbers are exposed only through Journals screen. Use 24:00 time to spool receipt journals in 9.5
          </p>
        </li>
        <li>
          <p>
            9.5 - <span className="title">Reports:</span> View and print reports including Daily Business Reports, Cycle Count Summary, Sections 1 through 7, Outstanding Paid Out Accounts(exchange accounts), Store Use Reports, $200 Exceptions Paid in/Paid out Summary, and pending MRs
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Help


