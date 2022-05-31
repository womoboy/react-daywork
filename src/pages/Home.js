import Navbar from "../components/navbar/Navbar";
import Bloglist from "../components/bloglist/Bloglist";

const Home = () => {
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