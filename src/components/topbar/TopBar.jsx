import React, { useContext, useEffect, useState } from "react";
import "./TopBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BlogContext } from "../../App";
const TopBar = () => {
  const { searchQuery, setSearchQuery, sortOption, setSortOption } =
    useContext(BlogContext);

  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };
  const handleSearchClose = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/blog/")) {
      setShowSearch(false);
      setSearchQuery("");
    }
  }, [location]);

  return (
    <div className="top">
      <div className="topLeft">
        <img src={logo} className="topBrandLogo" alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          {/* <li className="topListItem">Home</li> */}
          <Link className="navItem" to="/blog">
            Blog
          </Link>
          <li className="topListItem">
            <Link className="navItem" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">Services</li>
        </ul>
      </div>
      {/* <div className="topRight">
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div> */}
      <div className="topRight">
        <i
          className="topSearchIcon fa-solid fa-magnifying-glass"
          onClick={handleSearchIconClick}
        ></i>
        {showSearch && (
          <>
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i class="fa-solid fa-x closeIcon" onClick={handleSearchClose}></i>
          </>
        )}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sortDropdown"
        >
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
