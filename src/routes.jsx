import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import PostList from "./pages/PostList.jsx";
import PostCreate from "./pages/PostCreate.jsx";
import PostView from "./pages/PostView.jsx";
import PostEdit from "./pages/PostEdit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/posts/new", element: <PostCreate /> },
      { path: "/posts/:id", element: <PostView /> },
      { path: "/posts/:id/edit", element: <PostEdit /> },
    ],
  },
]);

export default router;
