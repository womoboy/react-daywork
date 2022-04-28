import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const submitForm = (event) => {
        event.preventDefault();

        onAdd({ title });

        setTitle('');
    }

    return(
        <>
            <form onSubmit={submitForm}>
                <div>
                    <input 
                    type="text" 
                    placeholder="Add Product" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/> 
                </div>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default AddProduct;