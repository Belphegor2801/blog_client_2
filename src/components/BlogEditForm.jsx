import { useState } from 'react';
import "./blog.css";

function BlogEditForm({ blog, onSubmit }) {
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const [createAt, setCreateAt] = useState(blog.createAt);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBlog = {
      title: title,
      body: body,
      createAt: createAt,
    };
    onSubmit(updatedBlog);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tiêu đề:</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Nội dung:</label>
        <textarea id="boby" value={body} onChange={(event) => setBody(event.target.value)} />
      </div>
      <div>
        <label htmlFor="createAt">Ngày khởi tạo</label>
        <input type="date" id="time" value={createAt} onChange={(event) => setCreateAt(event.target.value)} />
      </div>
      <button type="submit">Cập nhật</button>
    </form>
  );
}

export default BlogEditForm;