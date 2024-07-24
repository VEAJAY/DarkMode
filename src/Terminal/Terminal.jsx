import React, { useState, useEffect } from 'react';
import './Terminal.css';

function Terminal() {
  const [highlight, setHighlight] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'F4') {
      toggleHighlight();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const isHighlight = (value) => highlight && parseFloat(value) >= 1200;

  return (
    <div>
      <div className="terminal">
        <div className="terminal-left">
          {[
            { label: 'CUS 35', value: 2894 },
            { label: 'CUS 38', value: 1170 },
            { label: 'CUS 36', value: 3390 },
            { label: 'CUS 37', value: 887 },
            { label: 'FRT 10', value: 1140 },
            { label: 'FRT 11', value: 1261 },
            { label: 'FRT 14', value: 0.00 },
            { label: 'FRT 15', value: 0.00 },
            { label: 'FRT 53', value: 5692 },
            { label: 'FRT 45', value: 4112 },
            { label: 'FRT 56', value: 0.00 },
            { label: 'OFC 26', value: 0.00 }
          ].map((item, index) => (
            <h1 key={index} className={isHighlight(item.value) ? 'highlight' : ''}>
              {item.label} ------ {item.value}<br/><br/>
            </h1>
          ))}
          <h3 style={{ color: 'greenyellow' }}>
            **Toggle to view terminals <br /> over $1200
          </h3>
          <button className="toggle" onClick={toggleHighlight}>Toggle (F4)</button>
        </div>
        <div className="terminal-right">
          {[
            { label: 'SCO 13', value: 0.00 },
            { label: 'SCO 17', value: 0.00 },
            { label: 'SCO 18', value: 0.00 },
            { label: 'SCO 19', value: 0.00 },
            { label: 'SCO 41', value: 0.00 },
            { label: 'SCO 47', value: 0.00 },
            { label: 'SCO 33', value: 1877 },
            { label: 'SCO 34', value: 1367 },
            { label: 'GAR 19', value: 633 },
            { label: 'GAR 47', value: 0.00 },
            { label: 'GAR 18', value: 0.00 },
            { label: 'GAR 46', value: 746 }
          ].map((item, index) => (
            <h1 key={index} className={isHighlight(item.value) ? 'highlight' : ''}>
              {item.label} ------ {item.value}<br/><br/>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Terminal;
