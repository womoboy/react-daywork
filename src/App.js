import React, { useState } from 'react'

const App = () => {

    const [value, setValue] = useState([]);

    const handlerjson = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setValue(data);
    }

    return (
        <>
            {value &&
                value.map((item) => {
                    return <p key={item.id}> {item.title + ' ' + item.id}</p>
                })
            }
            <button onClick={handlerjson}>GetResponse</button>
        </>
    )
}

export default App;