import React, { useState } from "react";
import "../index.css";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const numAmount = parseFloat(amount);
    const numRate = parseFloat(rate);

    if (isNaN(numAmount) || isNaN(numRate) || numAmount <= 0 || numRate <= 0) {
      setResult("Podaj poprawne wartości.");
      return;
    }

    const converted = numAmount * numRate;
    setResult(`Przeliczona kwota: ${converted.toFixed(2)}`);
  };

  return (
    <div className="converter-container">
      <h1>Kalkulator Walut</h1>
      <input
        type="number"
        placeholder="Kwota w €"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Aktualny kurs"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <button onClick={handleCalculate}>Przelicz</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default CurrencyConverter;
