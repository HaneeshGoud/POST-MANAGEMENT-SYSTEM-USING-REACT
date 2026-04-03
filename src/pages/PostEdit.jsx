import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts.find((p) => p.id === id);

    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setContent(post.content);
      setTags(post.tags.join(", "));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = posts.map((p) =>
      p.id === id
        ? {
            ...p,
            title,
            author,
            content,
            tags: tags.split(",").map((t) => t.trim()),
            updatedAt: new Date().toISOString(),
          }
        : p
    );

    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    navigate(`/posts/${id}`);
  };

  return (
    <div className="page-container">
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label>Content</label>
        <textarea
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <label>Tags (comma separated)</label>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />

        <button type="submit" className="btn-primary">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default PostEdit;




