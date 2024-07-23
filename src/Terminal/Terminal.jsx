import React from 'react'

import './Terminal.css'

function Terminal() {
  return (
    <div>
      <div className="terminal">
        <div className="terminal-left">

          <h1>CUS 35 ------ 0.00</h1><br /><br />
          <h1>CUS 38 ------ 0.00</h1><br /><br />
          <h1>CUS 36 ------ 0.00</h1><br /><br />
          <h1>CUS 37 ------ 0.00</h1><br /><br />

          <h1>FRT 10 ------ 0.00</h1><br /><br />
          <h1>FRT 11 ------ 0.00</h1><br /><br />
          <h1>FRT 14 ------ 0.00</h1><br /><br />
          <h1>FRT 15 ------ 0.00</h1><br /><br />

          <h1>FRT 53 ------ 0.00</h1><br /><br />
          <h1>FRT 45 ------ 0.00</h1><br /><br />
          <h1>FRT 56 ------ 0.00</h1><br /><br />

          <h3 style={{ color: 'greenyellow' }}>
              **Toggle to view terminals <br /> over $1200
          </h3>
          <button className="toggle">Toggle (F6)</button>
        </div>
        <div className="terminal-right">
          <h1>SCO 13 ------ 0.00</h1><br /><br />
          <h1>SCO 17 ------ 0.00</h1><br /><br />
          <h1>SCO 18 ------ 0.00</h1><br /><br />
          <h1>SCO 19 ------ 0.00</h1><br /><br />
          <h1>SCO 41 ------ 0.00</h1><br /><br />
          <h1>SCO 47 ------ 0.00</h1><br /><br />
          <h1>SCO 33 ------ 0.00</h1><br /><br />
          <h1>SCO 34 ------ 0.00</h1><br /><br />

          <h1>GAR 19 ------ 0.00</h1><br /><br />
          <h1>GAR 47 ------ 0.00</h1><br /><br />
          <h1>GAR 18 ------ 0.00</h1><br /><br />
          <h1>GAR 46 ------ 0.00</h1><br /><br />

        </div>
      </div>
      
    </div>
  )
}

export default Terminal
