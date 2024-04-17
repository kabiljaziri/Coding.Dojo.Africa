import React from 'react';
import Colorform from './components/Colorform';
import './styles/styles.css';

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Box Generator</h1>
        <Colorform />
      </div>
    </>
  );
};

export default App;
