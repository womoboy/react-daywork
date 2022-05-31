import './Bloglist.scss';

const Bloglist = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
