import { useState } from 'react'

const App = () => {

    const [color, setColor] = useState('');

    const getColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <>
            <p>My favorit color is : {color}</p>
            <button value='Red' onClick={ getColor } >ChnageColor To Red</button>
            <button value='Blue' onClick={ getColor } >ChnageColor To Blue</button>
        </>
    )
}

export default App;