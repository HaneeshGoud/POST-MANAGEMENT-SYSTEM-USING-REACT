import { useParams, Link, useNavigate } from "react-router-dom";

function PostView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="page-container">
        <p>Post not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    const newPosts = posts.filter((p) => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(newPosts));

    navigate("/");
  };

  return (
    <div className="page-container">
      <h2>{post.title}</h2>

      <p style={{ color: "#666", marginBottom: "10px" }}>
        Author: {post.author} • {post.createdAt}
      </p>

      <p style={{ marginBottom: "18px", lineHeight: "1.6" }}>{post.content}</p>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              padding: "6px 10px",
              background: "#eee",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={`/posts/${post.id}/edit`} className="btn-edit">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn-delete">
          Delete
        </button>
        <Link to="/" className="btn-view">
          Back
        </Link>
      </div>
    </div>
  );
}

export default PostView;

