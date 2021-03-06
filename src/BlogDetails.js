import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, { method: 'DELETE' }).then(
      () => {
        history.push('/');
      }
    );
  };

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by <strong>{blog.author}</strong>
          </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
