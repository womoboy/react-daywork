import React, { useRef, useEffect } from 'react';

const App = () => {

    const intervalRef = useRef();

    useEffect(() => {
        const id = setInterval(() => {
            console.log('a secound has passed');
        }, 1000);
        intervalRef.current = id;

        return () => clearInterval(intervalRef.current);
    })

    const handleCancel = () => clearInterval(intervalRef.current);

    return (
        <>
            <button onClick={handleCancel}>Cancel</button>
        </>
    )
}

export default App;