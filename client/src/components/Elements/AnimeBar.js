import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnimeBar = ({ animes }) => {
  return (
    <div className="py-4 bg-grey ">
      <Container className="d-flex">
        {animes.map((anime) => (
          <Link key={anime.id} className="me-4 text-gray no-under">
            <h2 className="my-1">#{anime.title}</h2>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default AnimeBar;
