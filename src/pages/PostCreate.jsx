import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function PostCreate() {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    tags: ""
  });

  // Handle form input change
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!post.title || !post.author || !post.content) {
      alert("Please fill all required fields.");
      return;
    }

    const newPost = {
      id: uuid(),
      title: post.title,
      author: post.author,
      content: post.content,
      tags: post.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Load existing posts from localStorage
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Add new post
    savedPosts.push(newPost);

    // Save back to localStorage
    localStorage.setItem("posts", JSON.stringify(savedPosts));

    alert("Post Created Successfully!");

    // Navigate to post list
    navigate("/");
  };

  return (
    <div className="page-container">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit} className="form-container">

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={post.author}
          onChange={handleChange}
          required
        />

        <label>Content</label>
        <textarea
          name="content"
          rows="5"
          value={post.content}
          onChange={handleChange}
          required
        />

        <label>Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={post.tags}
          onChange={handleChange}
        />

        <button type="submit" className="btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default PostCreate;

