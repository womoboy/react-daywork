import './Testform.scss';
import { useState } from 'react';

const Testform = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputs((values) => ({...values, [name] : val}));
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    return(
        <>
            <form id='test-form' onSubmit={handlerSubmit}>
                <input placeholder="Enter first name" name="firstName" value={inputs.firstName || ''} type="text" onChange={handleChange} />
                <input placeholder='Enter last name' name="lastName" value={inputs.lastName || ''} type='text' onChange={handleChange} />
                <input placeholder='Enter age' name="age" value={inputs.age || ''} type='number' onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Testform;