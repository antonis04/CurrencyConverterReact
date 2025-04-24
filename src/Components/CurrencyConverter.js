import React, { useState } from 'react';
import '../index.css';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const numAmount = parseFloat(amount);
    const numRate = parseFloat(rate);

    if (isNaN(numAmount) || isNaN(numRate) || numAmount <= 0 || numRate <= 0) {
      setResult('Podaj poprawne wartości.');
      return;
    }

    const converted = numAmount * numRate;
    setResult(`Przeliczona kwota: ${converted.toFixed(2)}`);
  };

  return React.createElement(
    'div',
    { className: 'converter-container' },
    React.createElement('h1', null, 'Kalkulator Walut'),
    React.createElement('input', {
      type: 'number',
      placeholder: 'Kwota w €',
      value: amount,
      onChange: (e) => setAmount(e.target.value),
    }),
    React.createElement('input', {
      type: 'number',
      placeholder: 'Aktualny kurs',
      value: rate,
      onChange: (e) => setRate(e.target.value),
    }),
    React.createElement(
      'button',
      { onClick: handleCalculate },
      'Przelicz'
    ),
    React.createElement('div', { className: 'result' }, result)
  );
}

export default CurrencyConverter;
