import React, { useEffect, useState } from "react";
import axios from "../axios";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { useStateValue } from "../StateProvider";
import "./Photos.css";

function Photos() {
  const [{ term }, dispatch] = useStateValue();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        (term && `search?query=${term}`) || "curated"
      );
      console.log(response);
      setPhotos(response.data.photos);
      return response;
    };

    fetchData();
  }, [term]);

  return (
    <div className="photos">
      <div className="photos__row">
        {photos &&
          photos.map((photo) => (
            <div
              key={photo.id}
              className="photos__container"
              style={{ backgroundColor: photo.avg_color }}
            >
              <img src={photo.src.large} alt="" />
              <div className="photos__info">
                <p>{photo.photographer}</p>
                <div className="photos__infoButtons">
                  <GetAppOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon />
                  <FavoriteBorderOutlinedIcon />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Photos;
