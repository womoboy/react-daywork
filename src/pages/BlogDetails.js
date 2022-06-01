import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/blogs/" + id;
  const { response: blog, error, isPending } = useFetch(url);
  let navigate = useNavigate();

  const handleClick = () => {
      fetch(url, { method: 'DELETE'});
      setTimeout(() => {
        navigate('/');
      }, 100);
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div className="content">
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={ handleClick }>delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
