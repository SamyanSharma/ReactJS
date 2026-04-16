import React, { useState } from 'react';

export default function Dropdown() {
  const [options] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [selected, setSelected] = useState('');

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="" disabled>Select a technology</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
      {selected && <p>You selected: {selected}</p>}
    </div>
  );
}