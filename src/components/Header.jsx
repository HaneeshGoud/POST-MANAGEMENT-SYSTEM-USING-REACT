import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2 className="header-title">Post Management System</h2>

      <nav className="header-nav">
        <Link to="/" className="nav-link">Posts</Link>
        <Link to="/posts/new" className="nav-link">Create Post</Link>
      </nav>
    </header>
  );
}


