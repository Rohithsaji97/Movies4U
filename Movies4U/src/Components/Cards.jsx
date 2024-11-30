import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { imageUrl } from "./Url";
import { Link } from "react-router-dom";

function Cards({ title, pic, desc, id, getID }) {
  return (
    <div>
      <Card bg="dark" text="light" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl + pic} />
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontWeight: "900",
              marginBottom: "10%",
              fontSize: "20px",
            }}
          >
            {title}
          </Card.Title>
          {/* <Card.Text>{desc}</Card.Text> */}
          <Link to={"/details"}>
            <Button
              className="watch-btn"
              onClick={() => getID(id)}
              variant="light"
            >
              Watch Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
