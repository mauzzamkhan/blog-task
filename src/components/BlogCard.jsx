import React from "react";
import "./BlogCard.css";
import postImg from "../assets/Top12Img.png";
import { Link } from "react-router-dom";
const BlogCard = ({ post }) => {
  const formattedTitle = post.title.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <div className="card-wraper">
        <img src={postImg} className="postImg" alt="" />
        <div className="postInfo">
          <div className="blogDetails">
            <span className="postDate">
              {/* 12 Jan */}
              {post.date}
            </span>
            <div className="postCats">
              <span className="postCat">
                {/* Tech */}
                {post.category}
              </span>
              <span className="postCat">React</span>
            </div>
          </div>
          <span className="postTitle" >
            {/* How To Develop A Public Blockchain Platform? */}
            {post.title}
          </span>
          <span className="postDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            possimus ipsum hic a magni aliquam optio, eligendi natus aspernatur
            saepe veniam consectetur amet voluptatibus cum placeat corporis.
            Voluptates, pariatur dicta?
          </span>
        </div>
        <Link to={`/blog/${post.id}/${formattedTitle}`} className="seeMoreBtn">
          See More
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
