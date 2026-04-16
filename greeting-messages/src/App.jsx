import React from 'react'

const WelcomeMessage = ({name, language}) => {
  return (
    <>
      {language === 'en' ? (
        <h3>Hello, {name}!</h3>
      ) : (
        <h3>Bonjour, {name}!</h3>
      )}
    </>
  );
};

export default function App(){
  return (
    <div>
      <WelcomeMessage name="Alice" language="en"/>
      <WelcomeMessage name="Chloe" language="fr"/>
    </div>
  )
}