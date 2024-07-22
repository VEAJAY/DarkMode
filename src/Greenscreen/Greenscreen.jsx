import React from 'react'

import './Greenscreen.css'
import Help from '../Help/Help'
import Sales from '../Sales/Sales'

function Greenscreen({ content }) {
  return (
    <div>
      <div className="greenscreen">
        <div className="console">
            {content === 'Help' && <div><Help /></div>}
            {content === 'Sales' && <div><Sales /></div>}
        </div>
      </div>
    </div>
  )
}

export default Greenscreen
