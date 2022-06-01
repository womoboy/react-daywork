import Bloglist from "../components/bloglist/Bloglist";
import useFetch from "../customHooks/useFetch";

const Home = () => {
    const { response: blogs, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blogs && <Bloglist blogs={ blogs } title="All Blogs" />}   
        </div>
    )
}

export default Home;