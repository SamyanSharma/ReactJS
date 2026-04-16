import React, { useState } from 'react';

export default function CharLimitInput() {
  const [text, setText] = useState('');
  const MAX_LIMIT = 20;

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LIMIT) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text.length}/{MAX_LIMIT} characters</p>
      {text.length === MAX_LIMIT && <p style={{color: 'red'}}>Warning: Character limit reached!</p>}
    </div>
  );
}