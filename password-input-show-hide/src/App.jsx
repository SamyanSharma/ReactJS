import React, { useState } from 'react';

export default function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input type={showPassword ? "text" : "password"} placeholder="Enter password" />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}