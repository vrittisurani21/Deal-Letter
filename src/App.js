import React, { useState, useRef } from "react";
import DealForm from "./DealForm";
import DealLetter from "./DealLetter";
import "./App.css";

function App() {
  const [dealData, setDealData] = useState(null);
  const letterRef = useRef();

  const handlePrint = () => {
    const letterEl = letterRef.current;
    if (!letterEl) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow pop-ups to print.");
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>રિયલ એસ્ટેટ સોદા માટે સમજોતાપત્ર (MOU)</title>
          <style>
            @page { size: A4; margin: 12mm; }
            body { font-family: system-ui, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 0; color: #1a1a1a; font-size: 13px; line-height: 1.5; }
            .deal-letter { max-width: 100%; padding: 10mm 12mm; background: #fff; box-shadow: none; }
            .deal-letter__header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1.25rem; margin-bottom: 0.75rem; padding: 0.5rem 0; }
            .deal-letter__banner-wrap { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: flex-start; overflow: hidden; margin-right: 0.5rem; }
            .deal-letter__banner { display: block; width: 100%; height: auto; max-height: 130px; max-width: 100%; object-fit: contain; object-position: left center; }
            .deal-letter__date-field { min-width: 130px; font-size: 0.9rem; line-height: 1.4; padding: 0.5rem 0 0 0.5rem; word-break: break-word; }
            .deal-letter__date-field strong { font-weight: 600; color: #334155; }
            .deal-letter__title { margin: 0 0 0.75rem; font-size: 1.1rem; font-weight: 700; text-align: center; color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 0.5rem; }
            .deal-letter__grid { display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-bottom: 1rem; }
            .deal-letter__field { display: flex; flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 0.35rem; font-size: 0.9rem; line-height: 1.4; padding: 0.35rem 0; min-height: 1.5rem; border-bottom: 1px solid #e2e8f0; }
            .deal-letter__field--full { grid-column: 1 / -1; }
            .deal-letter__field strong { font-weight: 600; color: #334155; font-size: 0.85rem; flex-shrink: 0; }
            .deal-letter__two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; grid-column: 1 / -1; margin-bottom: 0; }
            .deal-letter__left-column, .deal-letter__right-column { display: flex; flex-direction: column; gap: 0; }
            .deal-letter__field--rules { border-top: 1px solid #cbd5e1; padding-top: 0.75rem; margin-top: 0.5rem; }
            .deal-letter__rules-heading { margin: 0; font-size: 0.95rem; font-weight: 700; color: #334155; }
            .deal-letter__rules-list { margin: 0 0 0 1.2rem; padding: 0; font-size: 0.9rem; line-height: 1.5; color: #1a1a1a; list-style-position: outside; }
            .deal-letter__rule-item { display: list-item; width: 100%; margin: 0 0 0.4rem; padding-left: 0.2rem; text-align: left; color: #1a1a1a; }
            .deal-letter__rule-item:last-child { margin-bottom: 0; }
            .deal-letter__signature-section { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid #cbd5e1; align-items: start; }
            .deal-letter__signature-left, .deal-letter__signature-right { display: flex; flex-direction: column; gap: 0.5rem; min-height: 100px; align-items: center; text-align: center; }
            .deal-letter__signature-left strong, .deal-letter__signature-right strong { font-weight: 600; color: #334155; font-size: 0.9rem; }
            .deal-letter__signature { width: 120px; height: 65px; object-fit: contain; object-position: center; display: block; margin-top: 0.5rem; margin-left: auto; margin-right: auto; border: 1px solid #94a3b8; border-radius: 2px; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>${letterEl.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    const doPrint = () => {
      printWindow.print();
      printWindow.onafterprint = () => printWindow.close();
    };
    if (printWindow.document.readyState === "complete") {
      setTimeout(doPrint, 250);
    } else {
      printWindow.onload = () => setTimeout(doPrint, 250);
    }
  };

  const showLetter = dealData && typeof dealData === "object";

  return (
    <div className="app">
      <h1 className="app__title">રિયલ એસ્ટેટ સોદા માટે સમજોતાપત્ર (MOU)</h1>
      <DealForm onSubmit={setDealData} />
      <DealLetter ref={letterRef} data={dealData} />
      {showLetter && (
        <div className="app__print-actions">
          <button type="button" className="app__print-btn" onClick={handlePrint}>
            Print / Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
