import React, { useState, useEffect, useRef } from 'react';

const App = () => {

    const [input, setInput] = useState('');
    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
    });

    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <p>The count is : {count.current} </p>
        </>
    )
}

export default App;