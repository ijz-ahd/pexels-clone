import React from "react";
import { Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ScreenRotationIcon from "@material-ui/icons/ScreenRotation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import ColorizeIcon from "@material-ui/icons/Colorize";
import Photos from "./Photos";
import "./Search.css";
import { useStateValue } from "../StateProvider";

function Search() {
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="search">
      <div className="search__header">
        <div className="search__headerLeft">
          <Button
            className="search__activeButton"
            variant="outlined"
            startIcon={<ImageIcon />}
          >
            Photos
          </Button>
          <Button variant="outlined" startIcon={<VideocamIcon />}>
            Videos
          </Button>
          <Button variant="outlined" startIcon={<AccountCircleIcon />}>
            Users
          </Button>
        </div>
        <div className="search__headerRight">
          <Button variant="outlined" startIcon={<ScreenRotationIcon />}>
            Orientation
          </Button>
          <Button variant="outlined" startIcon={<AspectRatioIcon />}>
            Size
          </Button>
          <Button variant="outlined" startIcon={<ColorizeIcon />}>
            Color
          </Button>
        </div>
      </div>
      <div className="search__info">
        <h2>{term || "Curated"} photos</h2>
        <p>
          These are the most beautiful pictures of {term} on Pexels. This search
          result page is the central page for {term} photography and free nature
          stock photos on Pexels. Feel free to use all of these {term} images
          for commercial use. The photo license is the free Pexels license.
        </p>
      </div>
      <div className="search__buttons">
        <Button>Landscape</Button>
        <Button>Forest</Button>
        <Button>Flowers</Button>
        <Button>Sky</Button>
        <Button>City</Button>
      </div>
      <Photos />
    </div>
  );
}

export default Search;
