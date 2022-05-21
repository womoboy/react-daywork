import React, { useState, useRef } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const prevValue = useRef('');

    const handlerSave = () => {
        prevValue.current = inputValue
    }

    return (
        <>
            <p>this is the app</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handlerSave} >SaveValue</button>
            <p>the prevValue value is : {prevValue.current} </p>
            <p>the current value is : {inputValue} </p>
        </>
    )
}

export default App;