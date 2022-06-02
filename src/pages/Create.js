import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.scss';

const Create = () => {
    const [ data, setData ] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(data)
        });
        setTimeout(() => {
            navigate('/');
        }, 300)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setData(values => ({...values, [name]: value}));
    }

    useEffect(() => {
        setData(values => ({...values, author: 'aria'}))
    }, []);

    return (
        <div className="create">
            <form onSubmit={ handleSubmit } >
                <label>Title</label>
                <input name='title' type="text" value={ data.title } onChange={ handleChange } />
                <label>Body</label>
                <textarea name='body' value={ data.body } onChange={ handleChange }></textarea>
                <label>Author</label>
                <select name='author' value={ data.author } onChange={ handleChange }>
                    <option selected value="aria">aria</option>
                    <option value="babak">babak</option>
                </select>
                <button>add</button>
            </form>
        </div>
    )
}

export default Create;