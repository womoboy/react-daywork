import Navbar from "../components/navbar/Navbar";
import Bloglist from "../components/bloglist/Bloglist";
import { useState, useEffect } from 'react';

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => console.log(res));
    });

    return (
        <div className="home">
            <Navbar />
            <div className="bloglist">
                <h2>All blogs</h2>
                <Bloglist />
            </div>
        </div>
    )
}

export default Home;