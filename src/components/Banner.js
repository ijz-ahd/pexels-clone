import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Banner.css";

function Banner() {
  const [inputTerm, setInputTerm] = useState("");

  //pulling data layer
  const [{}, dispatch] = useStateValue();
  //history hook
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_TERM,
      term: inputTerm,
    });
    history.push("/search");
  };

  return (
    <div className="banner">
      <div className="banner__info">
        <h1>
          The best free stock photos & videos shared by talented creators.
        </h1>
        <form className="banner__searchInput">
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
          >
            search
          </button>
        </form>
        <div className="banner__suggestion">
          <p>
            <span>Suggested:</span> beach,abstract,desktop
            backgrounds,summer,dark,more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
