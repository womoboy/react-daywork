import Bloglist from "../components/bloglist/Bloglist";
import useFetch from "../customHooks/useFetch";

const Home = () => {
    const url = 'http://localhost:8000/blogs';
    const { response: blogs, error, isPending } = useFetch(url);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blogs && <Bloglist blogs={ blogs } title="All Blogs" />}
        </div>
    )
}

export default Home;