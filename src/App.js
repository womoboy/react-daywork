import { useState } from 'react'

const App = () => {

    const [color, setColor] = useState('');

    const getColor = () => {
        setColor('Red');
    }

    return (
        <>
            <p>My favorit color is : {color}</p>
            <button onClick={ getColor } >ChnageColor</button>
        </>
    )
}

export default App;