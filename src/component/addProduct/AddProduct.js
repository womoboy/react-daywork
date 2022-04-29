import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
        onAdd({title});
        setTitle('');
    }

    return(
        <>
            <form onSubmit={formSubmit}>
                <div>
                    <input type="text"
                    placeholder='enter the name product'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </>
    )
}

export default AddProduct;