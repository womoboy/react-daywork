import React, { useState } from 'react'

const App = () => {

    const [value, setValue] = useState({});

    const handlerjson = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        setValue(data);
    }

    return (
        <>
            <pre>{JSON.stringify(value)}</pre>
            <pre>{value.id + '/' + value.title + '/' + value.completed}</pre>
            <button onClick={handlerjson}>GetResponse</button>
        </>
    )
}

export default App;