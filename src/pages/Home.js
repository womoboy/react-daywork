import Bloglist from "../components/bloglist/Bloglist";
import { useState, useEffect } from 'react';

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);

    return (
        <div className="home">
            {blogs && <Bloglist blogs={ blogs } title="All Blogs" />}   
        </div>
    )
}

export default Home;