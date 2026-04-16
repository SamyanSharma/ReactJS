import React, { useState } from 'react';

export default function QuoteGenerator() {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency."
  ];
  
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <p>"{currentQuote}"</p>
      <button onClick={generateRandom}>Generate Quote</button>
    </div>
  );
}