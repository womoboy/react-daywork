import useFetch from "./components/useFetch/useFetch";
import { useState } from 'react';

const App = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [value, setValue] = useState(null);

    const handlerData = () => {
        setValue(data);
    }

    return (
        <>
            {value && 
                value.map((item) => {
                    return <p key={item.id}>{item.title}</p>
                })
            }
            <button onClick={handlerData} >ShowData</button>
        </>
    )
}

export default App;