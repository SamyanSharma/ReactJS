import React from 'react';

const ProfileCard = ({ name, age, isOnline }) => {
  const statusColor = isOnline ? 'green' : 'gray';
  const statusText = isOnline ? 'online' : 'offline';

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <span style={{ color: statusColor, fontWeight: 'bold' }}>{statusText}</span>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ProfileCard name="Alice" age={23} isOnline={true} />
      <ProfileCard name="Bob" age={21} isOnline={false} />
      <ProfileCard name="Carlos" age={25} isOnline={true} />
    </div>
  );
}