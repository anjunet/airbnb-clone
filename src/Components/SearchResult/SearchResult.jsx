import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult-heart" />
      <div className="searchResult-info">
        <div className="searchResult-infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>----</p>
          <p>{description}</p>
        </div>
        <div className="searchResult-infoBottom">
          <div className="searchResult-star">
            <p>
              {" "}
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult-price">
            {" "}
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
