import React, { useState } from 'react';

const products = [
  { id: 1, name: "Laptop", price: 80000, category: "Premium" },
  { id: 2, name: "Mouse", price: 500, category: "Basic" },
  { id: 3, name: "Keyboard", price: 1500, category: "Basic" },
  { id: 4, name: "Smartphone", price: 60000, category: "Premium" },
  { id: 5, name: "Monitor", price: 12000, category: "Deluxe" },
  { id: 6, name: "Headphones", price: 3000, category: "Deluxe" }
];

export default function ProductTiles(){
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);
  return (
    <div>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Premium">Premium</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Basic">Basic</option>
      </select>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px'}}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{border: '1px solid black', padding: '10px'}}>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <span style={{backgroundColor: '#eee', padding: '3px'}}>{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}