
import React from 'react';
import Conversor from './components/Conversor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moeda</h1>
      <div className="linha">
        <Conversor moneyA="USD" moneyB="BRL" ></Conversor>
        <div className="seta"> ↔ </div>
        <Conversor moneyA="BRL" moneyB="USD"></Conversor>
      </div>
    </div>
  );
}

export default App;



