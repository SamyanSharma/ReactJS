import React, { useState } from 'react';

export default function BgColorChanger() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}