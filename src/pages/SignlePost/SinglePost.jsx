import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import postImg from "../../assets/Top12Img.png";
import Header from "../../components/header/Header";
function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const postData = {
          id: response.data.id,
          title: response.data.title,
          category: "Category",
          date: new Date(),
          content: response.data.body,
        };
        setPost(postData);
        document.title = response.data.title;
      })
      .catch((error) => console.error("Error fetching the post:", error));
  }, [id]);

  if (!post) return <div>Loading...</div>;
  return (
    <>
      <Header image={postImg} title={post.title} />
      <div className="singlePostWraper">
        {/* <img src={postImg} className="postImg" alt="" /> */}

        <div className="singlePost">
          <img src={postImg} className="postFeatured" alt="" />

          <h1 className="Title">{post.title}</h1>
          <div className="blogDetails mt-2">
            <span className="postDate">
              {new Date(post.date).toLocaleDateString()}
            </span>
            <div className="postCats">
              <span className="postCat">{post.category}</span>
              <span className="postCat">React</span>
            </div>
          </div>
          <div className="postDesc">{post.content}</div>
        </div>
        <div className="sidebar">here will be a sidebar of author</div>
      </div>
    </>
  );
}

export default SinglePost;
