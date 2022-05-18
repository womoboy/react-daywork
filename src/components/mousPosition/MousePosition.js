import { useState, useEffect } from 'react';

const MousePosition = () => {
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const jogMouseMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', jogMouseMove);
        return () => {
            window.removeEventListener('mousemove', jogMouseMove);
        }
    }, []);

    return (
        <>
            <p>x : {x}, y: {y}</p>
        </>
    )
}

export default MousePosition;