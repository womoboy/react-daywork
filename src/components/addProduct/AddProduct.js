import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        onAdd(title);
        setTitle('');
        console.log(`the title submited value is ${title}`);
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div>
                    <input type="text"
                    placeholder='enter the name'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}

export default AddProduct;