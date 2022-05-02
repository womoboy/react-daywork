import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <p>this number is : {count}</p>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
        </>
    )
}

export default Counter;