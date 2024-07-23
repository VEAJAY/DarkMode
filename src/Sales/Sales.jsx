import React, { useState, useEffect } from 'react';
import './Sales.css';

function Sales() {
  const [items, setItems] = useState([]);
  const [itemNumber, setItemNumber] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [modelNumber, setModelNumber] = useState('');
  const [loadIndicator, setLoadIndicator] = useState('CW');
  const [pickupDate, setPickupDate] = useState('');

  useEffect(() => {
    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    setPickupDate(today);
  }, []);

  const addItem = () => {
    if (items.length < 7) {
      const newItem = {
        itemNumber,
        quantity,
        modelNumber,
        loadIndicator,
        pickupDate,
      };
      setItems([...items, newItem]);

      // Clear fields
      setItemNumber('');
      setQuantity(1);
      setModelNumber('');
      setLoadIndicator('CW');
      setPickupDate(new Date().toISOString().split('T')[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  const handleRightClick = (e, index) => {
    e.preventDefault();
    setItems(items.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F9') {
        e.preventDefault();
        addItem();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [items, itemNumber, quantity, modelNumber, loadIndicator, pickupDate]);

  return (
    <>
      <div className="sales-screen">
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item" key={index} onContextMenu={(e) => handleRightClick(e, index)}>
              <p>({index + 1}) Item: {item.itemNumber} - {item.quantity} qty - {item.loadIndicator} - Date: {item.pickupDate}</p>
            </div>
          ))}
        </div>

        {/* START FORM */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Item Number (UPC):</label><br />
            <input
              type="text"
              className="input-field"
              value={itemNumber}
              onChange={(e) => setItemNumber(e.target.value)}
              required
            /><br /><br /><br />

            <label htmlFor="">Quantity:</label><br />
            <input
              type="number"
              className="input-field"
              min="0"
              max="9999"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            /><br /><br /><br />

            <label htmlFor="">Model Number:</label><br />
            <input
              type="text"
              className="input-field"
              value={modelNumber}
              onChange={(e) => setModelNumber(e.target.value)}
            /><br /><br /><br />

            <label htmlFor="load">Load Indicator:</label><br />
            <select
              id="load"
              name="load"
              className="input-field"
              value={loadIndicator}
              onChange={(e) => setLoadIndicator(e.target.value)}
              required
            >
              <option value="CW" style={{ background: 'black' }}>
                CW (Carry With)
              </option>
              <option value="NL" style={{ background: 'black' }}>
                NL (Not Loaded)
              </option>
              <option value="PL" style={{ background: 'black' }}>
                PL (Pickup Later)
              </option>
              <option value="LD" style={{ background: 'black' }}>
                LD (Lowes Delivery)
              </option>
            </select><br /><br /><br />

            <label htmlFor="">Pickup / Delivery Date:</label><br />
            <input
              type="date"
              className="input-field"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            /><br /><br /><br />

            <h3>Customer Lookup</h3><br />

            <label htmlFor="">Phone Number:</label><br />
            <input type="phone" className="input-field" /><br /><br /><br />

            <label htmlFor="">Email:</label><br />
            <input type="email" className="input-field" /><br /><br /><br />

            <h3 style={{ color: 'greenyellow' }}>
              **Right click on an item to <br /> delete them
            </h3><br /><br />

            <label htmlFor="">Comments:</label><br />
            <textarea className="input-field" cols="35" rows="10"></textarea>

            <div className="btn-container">
              <button type="submit">Process (F9)</button>
            </div>
          </form>
        </div>
        {/* END FORM */}
      </div>

      <div className="total">
        <h3>Tax: $0.00</h3>
        <h1>Subtotal: $0.00</h1>
      </div>
    </>
  );
}

export default Sales;
