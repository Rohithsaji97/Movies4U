import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSolidCameraMovie } from "react-icons/bi";

function Navi() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home" className="nav-content">
            <BiSolidCameraMovie
              style={{
                fontSize: "25px",
                marginRight: "15px",
                marginBottom: "5px",
              }}
            />
            Movies4U
          </Navbar.Brand>

          <Nav>
            <Nav.Link className="nav-content" href="/pMovies">
              Popular Movies
            </Nav.Link>
            <Nav.Link className="nav-content" href="/lMovies">
              Latest Movies
            </Nav.Link>
            <Nav.Link className="nav-content" href="/cMovies">
              Comedy Movies
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
