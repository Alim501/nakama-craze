import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import CreateAnime from "../../../components/modals/admin/CreateAnime";
import { useDispatch, useSelector } from "react-redux";
import { deleteExistingAnime, fetchAnime } from "../../../store/AnimeSlice";

const AdminAnime = () => {
  const [animeVisible, setAnimeVisible] = useState(false);
  const [currentAnime, setCurrentAnime] = useState(null);
  const anime = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    if (anime.status === "idle") {
      dispatch(fetchAnime());
    }
  }, [dispatch, anime.status]);

  if (anime.status === "loading") {
    return <div>Loading anime...</div>;
  }

  if (anime.status === "failed") {
    return <div>Error loading anime.</div>;
  }
  const handleDelete = (id) => {
    dispatch(deleteExistingAnime(id));
  };
  const tableHead = [
    "Название",
    "Изображение",
    "Дата обновления ",
    "Дата создания ",
  ];

  const handleEdit = (anime) => {
    setCurrentAnime(anime);
    setAnimeVisible(true);
  };

  return (
    <div>
      <Button
        variant="outline-dark"
        className="my-2"
        onClick={() => {
          setCurrentAnime(null); // Reset current anime
          setAnimeVisible(true);
        }}
      >
        Добавить аниме
      </Button>
      <CreateAnime
        show={animeVisible}
        onHide={() => setAnimeVisible(false)}
        initialData={currentAnime}
      ></CreateAnime>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableHead.map((th, index) => (
              <th key={index}> {th}</th>
            ))}
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {anime.items.map((anime, index) => (
            <tr key={anime.id}>
              <td>{anime.id}</td>
              <td> {anime.title}</td>
              <td>
                {" "}
                <img src={process.env.REACT_APP_API_URL+"/files/Anime/"+anime.img} alt={anime.title} width="100" />
              </td>
              <td> {anime.updatedAt}</td>
              <td> {anime.createdAt}</td>
              <td>
                <Button onClick={() => handleEdit(anime)}>Редактировать</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(anime.id)}>
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminAnime;
