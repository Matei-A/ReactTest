import logo from './logo.svg';
import './App.css';
import * as React from "react";


const { useState } = React;

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{counter}</p>
          <button onClick={() => {
            setCounter(counter + 1);
          }}>Increase Counter</button>
        </div>
      </header>
    </div>
  );
}

export default App;
