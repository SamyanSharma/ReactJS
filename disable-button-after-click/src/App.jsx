import React, { useState } from 'react';

export default function DisableButton() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <button onClick={() => setIsDisabled(true)} disabled={isDisabled}>
      {isDisabled ? 'Disabled' : 'Click Me!'}
    </button>
  );
}