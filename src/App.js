import { useState } from 'react';
import ShowInfo from './components/showInfo/ShowInfo';

const App = () => {

    const [count, setCount] = useState(0);

    const goAction = () => {
        setCount((val) => {
            return val + 1;
        })
    }

    return (
        <>
            <p>the count is : {count} </p>
            <button onClick={goAction} >GoAction</button>

            <ShowInfo countNum={count}/>
        </>
    )
}

export default App;