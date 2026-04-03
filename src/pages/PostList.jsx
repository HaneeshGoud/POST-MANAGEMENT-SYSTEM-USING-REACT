import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  return (
    <div className="page-container">
      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Click Create Post to add one.</p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;


