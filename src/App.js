
import { useState, useEffect } from 'react';

const App = () => {

    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);

    const handlerBanana = () => {
        setBananaCount((values) => values + 1);
    }

    const handlerApple = () => {
        setAppleCount((values) => values + 1);
    }

    useEffect(() => {
        console.log('apple count work');
    }, [appleCount]);

    return (
        <>
            <p>there is count banana count in storge : {bananaCount} </p>
            <button onClick={ handlerBanana }>+1 banana</button>
            <p>there is count apple count in storge : {appleCount} </p>
            <button onClick={ handlerApple } >+1 Apple</button>
        </>
    )
}

export default App;