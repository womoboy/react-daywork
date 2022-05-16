import './Testform.scss';
import { useState } from 'react';

const Testform = () => {
    const[inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    
    const submitFunc = (event) => {
        event.preventDefault();

    }

    return (
        <>
            <form id='test-form' onSubmit={submitFunc}>
                <h2>Test Form</h2>
                <input type="text" placeholder='Enter your text' name='text' value={inputs.text || ''} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Testform;