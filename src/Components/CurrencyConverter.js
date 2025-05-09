import React, { useState } from "react";
import DateTime from "./DateTime";
import "../index.css";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  // Zdefiniowane wcześniej waluty z kursami
  const currencies = [
    { code: "EUR", name: "Euro", rate: 4.32 },
    { code: "USD", name: "Dolar amerykański", rate: 3.94 },
    { code: "GBP", name: "Funt brytyjski", rate: 5.06 },
    { code: "CHF", name: "Frank szwajcarski", rate: 4.45 },
  ];

  const handleCalculate = () => {
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      setResult("Podaj poprawną kwotę.");
      return;
    }

    const currency = currencies.find((c) => c.code === selectedCurrency);
    const converted = numAmount * currency.rate;
    setResult(`Przeliczona kwota: ${converted.toFixed(2)} PLN`);
  };

  return (
    <div className="converter-container">
      <h1>Kalkulator Walut</h1>
      <DateTime />
      <div className="input-group">
        <input
          type="number"
          placeholder="Wpisz kwotę"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCalculate}>Przelicz na PLN</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default CurrencyConverter;
