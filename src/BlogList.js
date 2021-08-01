const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  if (!blogs.length) {
    return (
      <div className='blog_list'>
        <h2>No Blogs</h2>
      </div>
    );
  } else {
    return (
      <div className='blog_list'>
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className='blogs_preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p> written by {blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
          </div>
        ))}
      </div>
    );
  }
};

export default BlogList;
