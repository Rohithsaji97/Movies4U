import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { movieContext } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";

function Movie({ heading, api }) {
  const [movie, setMovie] = useState([]);
  const passed = useContext(movieContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get(api).then((each) => setMovie(each.data.results));
    axios.get(api).then((each) => passed.setPassMovies(each.data.results));
  }, [api, passed]);

  const getID = (id) => {
    passed.setId(id);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const displayValue = () => {
    console.log(searchValue);
  };

  const filteredMovies = movie.filter((each) =>
    (each.name || each.title).toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Form className="d-flex search-box">
        <Form.Control
          name="search"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleSearch}
        />
        <Button onClick={displayValue} variant="danger">
          <FaSearch />
        </Button>
      </Form>
      <h1 className="heading">{heading} MOVIES</h1>
      <div className="movie-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((each, index) => (
            <Cards
              key={index}
              title={each.name || each.title}
              pic={each.poster_path}
              desc={each.overview}
              id={each.id}
              getID={getID}
            />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
}

export default Movie;
