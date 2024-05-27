import logo from "./logo.svg";
import "./App.css";
import Blog from "./pages/Blog";
import TopBar from "./components/topbar/TopBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SinglePost from "./pages/SignlePost/SinglePost";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
export const BlogContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const formattedPosts = response.data.map((post) => ({
          id: post.id,
          title: post.title,
          category: "Category",
          date: "12 Jan",
          excerpt: post.body,
          content: post.body,
        }));
        setPosts(formattedPosts);
      })
      .catch((error) => console.error("Error fetching the posts:", error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <BlogContext.Provider value={{ posts: sortedPosts, searchQuery, setSearchQuery, sortOption, setSortOption }}>

    <div className="App">
      
      <Router>
        <TopBar />

        <Routes>
          <Route path="/" element={<Navigate to="/blog" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id/:title" element={<SinglePost />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
      {/* <TopBar /> */}
      {/* <Blog /> */}
    </div>
    </BlogContext.Provider>
  );
}

export default App;
