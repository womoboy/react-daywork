import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

const cars = [
    {id: 1, title: "BMW"},
    {id: 2, title: "Volvo"},
    {id: 3, title: "Ford"},
    {id: 4, title: "Fiat" }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App cars={cars}/>);
