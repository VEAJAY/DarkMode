import React from 'react';
import './Reports.css';

function Reports() {
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
  const formattedTime = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}:${String(today.getSeconds()).padStart(2, '0')}`;

  const reportNames = [
    "CYCLE COUNT SUMMARY",
    "NPI LISTING",
    "DAILY SUMMARY REPORTING",
    "BANK RECONCILIATION REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "OUTSTANDING PAID OUT REPORT",
    "200 EXCEPTION REPORT",
    "REGISTER TOTALS",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "SECTION 3 REPORT",
    "SECTION 4 REPORT",
    "SECTION 5 REPORT",
    "SECTION 6 REPORT",
    "SECTION 7 REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "END OF DAY SALES RECORD",
    "CYCLE COUNT SUMMARY",
    "NPI LISTING",
    "DAILY SUMMARY REPORTING",
    "BANK RECONCILIATION REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "OUTSTANDING PAID OUT REPORT",
    "200 EXCEPTION REPORT",
    "REGISTER TOTALS",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "SECTION 3 REPORT",
    "SECTION 4 REPORT",
    "SECTION 5 REPORT",
    "SECTION 6 REPORT",
    "SECTION 7 REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "HLD STORE USE REPORT",
    "END OF DAY SALES RECORD"
  ];

  return (
    <div>
      <div className="head-container">
        <h3 className='header'>print</h3>
        <h3 className='header'>report name</h3>
        <h3 className='header'>date</h3>
        <h3 className='header'>time</h3>
        <h3 className='header'>user</h3>
      </div>
      
      <div className="report-container">
        {reportNames.map((reportName, index) => (
          <div className="log" key={index}>
            <h3>__</h3>
            <h3>{reportName}</h3>
            <h3>{formattedDate}</h3>
            <h3>{formattedTime}</h3>
            <h3>s0501jv1</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
