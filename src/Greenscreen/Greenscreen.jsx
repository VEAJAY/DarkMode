import React from 'react'

import './Greenscreen.css'
import Help from '../Help/Help'

function Greenscreen({ content }) {
  return (
    <div>
      <div className="greenscreen">
        <div className="console">
            {content === 'Help' && <div><Help /></div>}
        </div>
      </div>
    </div>
  )
}

export default Greenscreen
