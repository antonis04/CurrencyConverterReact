import React, { useState } from "react";
import DateTime from "../DateTime/DateTime";
import "../index.css";
import {
  ConverterContainer,
  Title,
  ConverterForm,
  InputGroup,
  Input,
  Select,
  Button,
  Result,
  ErrorMessage
} from "./styled";

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
    <ConverterContainer>
      <Title>Kalkulator Walut</Title>
      <DateTime />
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
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </Select>
        </InputGroup>
        <Button type="button" onClick={handleCalculate}>Przelicz na PLN</Button>
        <Result>{result}</Result>
      </ConverterForm>
    </ConverterContainer>
  );
}

export default CurrencyConverter;
