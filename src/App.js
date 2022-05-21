import React, { useRef } from 'react';

const App = () => {
    const inputElement = useRef();

    const getFocus = () => {
        inputElement.current.focus();
    }

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={getFocus} >GetFocus</button>
        </>
    )
}

export default App