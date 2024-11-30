import React, { useContext, useEffect, useState } from "react";
import { movieContext } from "../App";
import { imageUrl } from "./Url";
import { Rate } from "antd";
import Button from "react-bootstrap/Button";
import { GiPlayButton } from "react-icons/gi";

function Moviedetails() {
  const passed = useContext(movieContext);
  const [index, setIndex] = useState();

  useEffect(() => {
    passed.passMovies.forEach((element) => {
      if (element.id === passed.id) {
        setIndex(passed.passMovies[passed.passMovies.indexOf(element)]);
      }
    });
  }, [passed]);

  return (
    <div>
      <img
        className="det-img"
        src={imageUrl + index?.poster_path}
        alt={index?.title}
      />
      <div className="movie-det">
        <img
          className="small-pack"
          src={imageUrl + index?.poster_path}
          alt={index?.title}
        />
        <div className="desc-pack">
          <h1 className="mov-head">{index?.title || index?.name}</h1>
          <h5 className="mov-lan">Language: {index?.original_language}</h5>
          <h5 className="mov-cat">
            Category: {index?.adult ? "18+" : "R-rated"}
          </h5>
          <h5 className="mov-rel">Release Date: {index?.release_date}</h5>
          <h5 className="mov-rat">
            Rating:{" "}
            {index?.vote_average !== undefined ? (
              <Rate
                style={{ color: "white" }}
                disabled
                defaultValue={Math.floor(index.vote_average / 2)}
              />
            ) : (
              <span>No rating available</span>
            )}
          </h5>
          <h5 className="mov-des">{index?.overview}</h5>
        </div>
        <Button className="mov-but" variant="light">
          Watch Now
          <GiPlayButton
            style={{
              fontSize: "30px",
              marginLeft: "3px",
              marginBottom: "2px",
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default Moviedetails;
