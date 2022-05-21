import React, { useState, useRef, useEffect } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('');

    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
    })

    return (
        <>
            <h2>this is the app</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>count of re-render : {count.current} </p>
        </>
    )
}

export default App;