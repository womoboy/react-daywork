import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

const cars = ['ford', 'bmw', 'audi'];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App cars={cars}/>);
