import './Testform.scss';
import { useState } from 'react';

const Testform = () => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    const handlerChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]: value}))
    }

    return (
        <>
            <form id='test-form' onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter first name" name="firstName" value={inputs.firstName || ''} onChange={handlerChange} />
                <input type="text" placeholder="Enter last name" name="lastName" value={inputs.lastName || ''} onChange={handlerChange} />
                <input type="submit" />
            </form>
        </>
    )
}

export default Testform;