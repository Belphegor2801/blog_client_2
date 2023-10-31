import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import "./blog.css";

// var data = require('./db-test.json');

function Blog() {
   const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:3001/api/blogs");
    const jsonData = await response.json();
    setBlogs(jsonData.data);
    // setBlogs(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <div className='blog-grid'>
      {blogs.map((blog) => (
        <div className='blog-item'>
          <div className='blog-item-img '>
            <img src = {blog.image} alt="Không tìm thấy hình ảnh"/>
          </div>
          
          <div className='blog-item-button'>
              <Link to = {`/${blog._id}`}>
                <button>
                  Chi tiết
                </button>
              </Link>
              <Link to = {`/put/${blog._id}`}>
                <button>
                  Cập nhật
                </button>
              </Link>
            </div>
          <div className='blog-item-title'>{blog.title}</div>
          <div className='blog-item-time'>{blog.createAt}</div>
          <div className='blog-item-body'>{blog.body}</div>
        </div>
        ))}
    </div>
  );
}

export { Blog};