import React, { useState } from 'react';

export default function LivePreview() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..."
      />
      <p>Live Preview: {text}</p>
    </div>
  );
}