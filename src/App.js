import React from 'react';
import './App.css';

function App() {
  const style = {
    color: "red",
    textAlign: "left"
  };
  return (
    <div className='App'>
      <h1 style={style}>test header</h1>
      <p>this is a test ! just it</p>
    </div>
  );
}


export default App;

