import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogEditForm from './BlogEditForm';

function BlogEditPage() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (updatedBlog) => {
    try {
      const response = await fetch(`http://localhost:3001/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      navigate(`../${id}`);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`http://localhost:3001/api/blogs/${id}`);
        if (!response.ok) {
          const error = await response.text();
          throw new Error(error);
        }
        const blog = await response.json();
        setBlog(blog.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BlogEditForm blog={blog} onSubmit={handleSubmit}/>
    </div>
  );
}

export { BlogEditPage};