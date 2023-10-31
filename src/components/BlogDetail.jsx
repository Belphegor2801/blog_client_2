import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link} from "react-router-dom";
import "./blog.css";

function BlogDetail() {
  const {id} = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className='blog-container'>
          <div className='blog-image '>
            <img src = {blog.image} alt="Không tìm thấy hình ảnh"/>
          </div>
          
          <div className='blog-id'>Blog ID: {blog._id} 
            <span>
              <Link to = {`/put/${blog._id}`}>
                <button>
                  Cập nhật
                </button>
              </Link>
            </span>
        </div>
          <div className='blog-title'>Tiêu đề: {blog.title}</div>
          <div className='blog-time'>Thời gian tạo: {blog.createAt}</div>
          <div className='blog-body'>{blog.body}</div>
        </div>
  );
}

export { BlogDetail};