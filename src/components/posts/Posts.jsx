import React, { useContext, useEffect, useState } from "react";
import "./Posts.css";
import BlogCard from "../BlogCard";
import axios from "axios";
import { BlogContext } from "../../App";
function Posts() {
  const { posts } = useContext(BlogContext);

  // const [posts, setPosts] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [sortOption, setSortOption] = useState("date");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       const formattedPosts = response.data.map((post) => ({
  //         id: post.id,
  //         title: post.title,
  //         category: "Category",
  //         date: "12 Jan",
  //         excerpt: post.body,
  //         content: post.body,
  //       }));
  //       setPosts(formattedPosts);
  //     })
  //     .catch((error) => console.error("Error fetching the posts:", error));
  // }, []);
  // console.log(posts, "posts");

  // const filteredPosts = posts.filter((post) =>
  //   post.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const sortedPosts = filteredPosts.sort((a, b) => {
  //   if (sortOption === "date") {
  //     return new Date(b.date) - new Date(a.date);
  //   }
  //   if (sortOption === "title") {
  //     return a.title.localeCompare(b.title);
  //   }
  //   return 0;
  // });

  return (
    <div className="postsWraper">
      {posts && posts?.map((post) => <BlogCard key={post.id} post={post} />)}
    </div>
  );
}

export default Posts;
