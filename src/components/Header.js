import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Header.css";

function Header() {
  const [showHandle, setShowHandle] = useState(false);
  const [inputTerm, setInputTerm] = useState("");
  const [{}, dispatch] = useStateValue();

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_TERM,
      term: inputTerm,
    });
    setInputTerm("");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowHandle(true);
      } else {
        setShowHandle(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={`header ${showHandle && "header--activeBg"} ${
        location.pathname === "/search" && "header--activeBg"
      }`}
    >
      <div className="header__left">
        <Link to="/">
          <img
            className="header__logo"
            src="http://images.pexels.com/lib/api/pexels-white.png"
            alt="pexels"
          />
        </Link>

        <form
          className={`header__searchInput ${
            showHandle && "header__searchInput--active"
          } ${
            location.pathname === "/search" && "header__searchInput--active"
          }`}
        >
          <input
            type="text"
            placeholder="Search for free photos and videos"
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
          />
          <SearchIcon />
          <button
            type="submit"
            style={{ display: "none" }}
            onClick={handleSubmit}
          ></button>
        </form>
      </div>
      <div className="header__right">
        <div className="header__rightOptions">
          <p>Explore</p>
          <p>License</p>
          <p>Upload</p>
          <MoreHorizIcon />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
