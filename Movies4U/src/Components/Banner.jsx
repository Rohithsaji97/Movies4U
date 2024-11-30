import axios from "axios";
import React, { useEffect, useState } from "react";
import { imageUrl, latestMovies } from "./Url";
import Button from "react-bootstrap/Button";
import { GiPlayButton } from "react-icons/gi";
import { MdInfoOutline } from "react-icons/md";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [random, setRandom] = useState(null);
  const gud = [0, 1, 2, 4, 5, 6, 10, 11, 12, 13, 15, 16, 17];

  useEffect(() => {
    axios.get(latestMovies).then((one) => setMovie(one.data.results));
    setRandom(Math.floor(Math.random() * gud.length));
  }, [gud.length]);
  const ban = movie[gud[random]];

  return (
    <div>
      <div className="content-ban">
        <h1>{ban?.title}</h1>
        <h5>{ban?.overview}</h5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button variant="light">
            Watch Now
            <GiPlayButton
              style={{
                fontSize: "25px",
                marginLeft: "3px",
                marginBottom: "2px",
              }}
            />
          </Button>
          <Button variant="light" style={{ marginLeft: "10px" }}>
            More Info{" "}
            <MdInfoOutline
              style={{
                fontSize: "25px",
                marginLeft: "3px",
                marginBottom: "2px",
              }}
            />
          </Button>
        </div>
      </div>
      <img
        className="ban-img"
        src={imageUrl + ban?.poster_path}
        alt={ban?.title}
      />
    </div>
  );
}

export default Banner;
