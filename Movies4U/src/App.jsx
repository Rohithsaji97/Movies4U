import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navi from "./Components/Navi";
import Home from "./Pages/Home";
import { comedyMovies, latestMovies, popularMovies } from "./Components/Url";
import Movie from "./Components/Movie";
import Moviedetails from "./Components/Moviedetails";
import { createContext, useState } from "react";

const movieContext = createContext();

function App() {
  const [passMovies, setPassMovies] = useState([]);
  const [id, setId] = useState();
  return (
    <div>
      <movieContext.Provider value={{ passMovies, setPassMovies, id, setId }}>
        <BrowserRouter>
          <Navi />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Moviedetails />} />
            <Route
              path="/pMovies"
              element={<Movie heading={"POPULAR"} api={popularMovies} />}
            />
            <Route
              path="/lMovies"
              element={<Movie heading={"LATEST"} api={latestMovies} />}
            />
            <Route
              path="/cMovies"
              element={<Movie heading={"COMEDY"} api={comedyMovies} />}
            />
          </Routes>
        </BrowserRouter>
      </movieContext.Provider>
    </div>
  );
}

export default App;
export { movieContext };
