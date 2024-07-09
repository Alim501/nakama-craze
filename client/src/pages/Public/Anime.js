import React, { useEffect } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import RectangleBlock from "../../components/Grid/RectangleBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../../store/AnimeSlice";

const Anime = () => {
  const anime = useSelector((state) => state.anime);
  const dispatch = useDispatch();
  useEffect(() => {
    if (anime.status === "idle") {
      dispatch(fetchAnime());
    }
  }, [dispatch, anime.status]);

  if (anime.status === "loading") {
    return(
    <div className="text-center my-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </Spinner>
    </div>
    );
  }

  if (anime.status === "failed") {
    return (
      <div className="text-center my-5">
        <Alert variant="danger">Ошибка при загрузке.{anime.error}</Alert>
      </div>
    );
  }

  const rectangles = [];
  for (let i = 0; i < anime.items.length; i += 3) {
    rectangles.push(
      <RectangleBlock key={i} anime={anime.items} i={i}></RectangleBlock>
    );
  }

  return <Container>{rectangles}</Container>;
};

export default Anime;
