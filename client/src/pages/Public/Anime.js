import React, { useEffect } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../../store/AnimeSlice";
import Rectangle from "../../components/Grid/Rectangle";
import AnimeBar from "../../components/Elements/AnimeBar";
import Loading from "../../components/Elements/Loading";

const Anime = () => {
  const anime = useSelector((state) => state.anime);
  const dispatch = useDispatch();
  useEffect(() => {
    if (anime.status === "idle") {
      dispatch(fetchAnime());
    }
  }, [dispatch, anime.status]);

  if (anime.status === "loading") {
    return <Loading></Loading>;
  }

  if (anime.status === "failed") {
    return (
      <div className="text-center my-5">
        <Alert variant="danger">Ошибка при загрузке.{anime.error}</Alert>
      </div>
    );
  }
  const animeBarData = anime.items
    ? anime.items.map((anim) => ({
        id: anim.id,
        title: anim.title,
      }))
    : [];
  return (
    <div>
      <AnimeBar animes={animeBarData.length > 0 ? animeBarData : []}></AnimeBar>
      <Container className="my-5">
        <Row md={2}>
          {anime.items.map((anim, idx) => (
            <Col key={idx}>
              <Rectangle img={anim.img}></Rectangle>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Anime;
