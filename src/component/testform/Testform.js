import './Testform.scss';
import { useState } from 'react';

const Testform = () => {

    const [inputs, setInputs] = useState({});

    const handlerChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputs((values) => ({...values, [name]: val}));
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <form id="test-form" onSubmit={handlerSubmit}>
                <input name='firstName' placeholder="Enter your first name" type="text" value={inputs.firstName || ''} onChange={handlerChange} />
                <input name='age' placeholder= 'enter your age' type="number" value={inputs.age || ''} onChange={handlerChange} />
                <select name='car' value={inputs.car || ''} onChange={handlerChange}>
                    <option value='Ford'>Ford</option>
                    <option value='Fiat'>Fiat</option>
                    <option value='Volvo'>Volvo</option>
                </select>
                <textarea name='info' placeholder="enter your text" value={inputs.info || ''} onChange={handlerChange}></textarea>
                <input type="submit" value='Submit' />
            </form>
        </>
    )
}

export default Testform;