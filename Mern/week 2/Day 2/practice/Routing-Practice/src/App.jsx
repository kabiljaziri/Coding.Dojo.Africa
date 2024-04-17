import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CombinedPage from './components/CombinedPage';
// import NumberPage from './components/NumberPage';
// import WordPage from './components/WordPage';
import StyledWordPage from './components/StyledWordPage';
import './styles/styles.css'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/:number" element={<NumberPage />} /> */}
      <Route path="/:param" element={<CombinedPage />} />
      <Route path="/:word/:textColor/:bgColor" element={<StyledWordPage />} />
      {/* <Route path="/:word" element={<WordPage />} /> */}
    </Routes>
  );
}

export default App;
