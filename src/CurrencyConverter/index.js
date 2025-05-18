import React, { useState } from "react";
import DateTime from "../DateTime";
import {
  ConverterContainer,
  Title,
  ConverterForm,
  InputGroup,
  Input,
  Select,
  Button,
  Result,
  ErrorMessage,
  SourceNote
} from "./styled";
import { useRatesData } from "../Rates/useRatesData";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const [isCalculating, setIsCalculating] = useState(false); // New state for tracking calculation
  const ratesData = useRatesData();

  const handleCalculate = async () => {
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      setResult("Podaj poprawną kwotę.");
      return;
    }

    if (ratesData.state !== "success" || !ratesData.rates[selectedCurrency]) {
      setResult("Nie udało się pobrać kursu waluty.");
      return;
    }

    // Start calculation and show loading screen
    setIsCalculating(true);
    
    // Simulate delay to show loading state (can remove this in production)
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    const rate = ratesData.rates[selectedCurrency].value;
    const plnRate = ratesData.rates["PLN"] ? ratesData.rates["PLN"].value : 1;
    
    const amountInUSD = numAmount / rate;
    const amountInPLN = amountInUSD * plnRate;
    
    setResult(`${amountInPLN.toFixed(2)} PLN`);
    setIsCalculating(false); // End calculation and hide loading screen
  };

  return (
    <ConverterContainer>
      <Title>Kalkulator Walut</Title>
      <DateTime />
      {ratesData.state === "loading" ? (
        <div style={{ textAlign: "center", fontSize: "18px", margin: "20px 0" }}>
          Proszę czekać, trwa ładowanie kursów walut...
        </div>
      ) : ratesData.state === "error" ? (
        <ErrorMessage>
          {ratesData.errorMessage || "Nie udało się pobrać kursów walut. Spróbuj ponownie później."}
        </ErrorMessage>
      ) : isCalculating ? (
        <div style={{ textAlign: "center", fontSize: "18px", margin: "20px 0" }}>
          Proszę czekać, trwa przeliczanie kwoty...
        </div>
      ) : (
        <ConverterForm onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <Input
              type="number"
              placeholder="Wpisz kwotę"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {Object.keys(ratesData.rates)
                .filter(currency => currency !== "PLN")
                .map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </Select>
          </InputGroup>
          <Button type="button" onClick={handleCalculate}>
            Przelicz na PLN
          </Button>
          <Result>{result}</Result>
        </ConverterForm>
      )}
      <SourceNote>
        Kursy walut pobierane są z serwisu currencyapi.com
      </SourceNote>
    </ConverterContainer>
  );
}

export default CurrencyConverter;
