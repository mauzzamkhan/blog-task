import React from "react";
import "./Header.css";
import HeaderImg from "../../assets/headerImg.png";
const Header = ({ image,title }) => {
  return (
    <div className="backgroundImage">
      <div className="headerTitles">
        <span className="headerTitleSm">{title ? title : `React & Node`}</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      {/* <img src={HeaderImg} className="headerImage" alt="" /> */}
    </div>
  );
};

export default Header;
