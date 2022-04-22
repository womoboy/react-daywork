import React from 'react';
import ReactDOM from 'react-dom';

const x = "Hello World !";

const element = React.createElement(
    'div',
    { id: 'app', className: "container" },
    x
);

const root = document.getElementById("root");

ReactDOM.render(element, root);