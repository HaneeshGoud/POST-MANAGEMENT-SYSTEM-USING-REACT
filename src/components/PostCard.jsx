import { Link, useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this post?");
    if (!confirmDelete) return;

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPosts = posts.filter((p) => p.id !== post.id);

    localStorage.setItem("posts", JSON.stringify(newPosts));

    navigate("/");
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>

      <p className="meta">
        Author: {post.author} • {post.createdAt}
      </p>

      <p>{post.content.substring(0, 80)}...</p>

      <div className="card-actions">
        <Link to={`/posts/${post.id}`} className="btn-view">View</Link>
        <Link to={`/posts/${post.id}/edit`} className="btn-edit">Edit</Link>
        <button onClick={handleDelete} className="btn-delete">Delete</button>
      </div>
    </div>
  );
}

export default PostCard;


