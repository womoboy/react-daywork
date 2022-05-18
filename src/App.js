import { useState, useEffect } from 'react';

const App = () => {

    const [count, setCount] = useState(0);
    const [num1 , setNum1] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((e) => e + 1);
        }, 1000)
    }, [num1])

    const additionNum = () => {
        setNum1((e)=> e + 2);
    }

    return (
        <>
            <p>this count is : { count }</p>
            <p>this is num : { num1 } </p>
            <button onClick={additionNum}>ClickMe</button>
        </>
    )
}

export default App;