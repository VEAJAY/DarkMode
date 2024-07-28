import React from 'react'

import './Greenscreen.css'
import Help from '../Help/Help'
import Sales from '../Sales/Sales'
import Terminal from '../Terminal/Terminal'
import Reports from '../Reports/Reports'
import Logistics from '../Logistics/Logistics'

function Greenscreen({ content }) {
  return (
    <div>
      <div className="greenscreen">
        <div className="console">
            {content === 'Help' && <div><Help /></div>}
            {content === 'Sales' && <div><Sales /></div>}
            {content === 'Terminal' && <div><Terminal /></div>}
            {content === 'Reports' && <div><Reports /></div>}
            {content === 'Logistics' && <div><Logistics /></div>}
        </div>
      </div>
    </div>
  )
}

export default Greenscreen
