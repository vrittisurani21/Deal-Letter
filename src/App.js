import React, { useState } from "react";
import DealForm from "./DealForm";
import DealLetter from "./DealLetter";
import "./App.css";

function App() {
  const [dealData, setDealData] = useState(null);

  const handleDownload = () => {
    // Use browser print dialog; user can choose "Save as PDF"
    window.print();
  };

  const showLetter = dealData && typeof dealData === "object";

  return (
    <div className="app">
      <h1 className="app__title">રિયલ એસ્ટેટ સોદા માટે સમજોતાપત્ર (MOU)</h1>
      <DealForm onSubmit={setDealData} />
      <DealLetter data={dealData} />
      {showLetter && (
        <div className="app__print-actions">
          <button type="button" className="app__print-btn" onClick={handleDownload}>
            Download / Save as PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
