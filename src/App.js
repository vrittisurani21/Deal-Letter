import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import DealForm from "./DealForm";
import DealLetter from "./DealLetter";
import "./App.css";

function App() {
  const [dealData, setDealData] = useState(null);

  const handleDownload = () => {
    if (!dealData || typeof window === "undefined") return;
    const element = document.getElementById("deal-letter");
    if (!element) return;

    const opt = {
      // Keep margins tight so banner and content match on-screen layout
      margin:       0,
      filename:     "deal-letter.pdf",
      image:        { type: "jpeg", quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF:        { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
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
