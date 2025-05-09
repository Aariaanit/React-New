
const BlogList = (props) => {
 
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
  
      <h2>{title}</h2>
      
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <h3>{blog.body}</h3>
          <p>{blog.instructor}</p>
        
        </div>
      ))}
    </div>
  );
};

export default BlogList;
