import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import { createNewAnime, updateExistingAnime } from "../../../store/AnimeSlice";

function CreateAnime({ show, onHide, initialData }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setImage(null); // reset image as it won't be prefilled
    }
  }, [initialData]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    if (image) {
      formData.append("img", image);
    }

    if (initialData) {
      // Update existing anime
      dispatch(
        updateExistingAnime({ id: initialData.id, anime: formData })
      ).then(() => {
        onHide();
      });
    } else {
      // Create new anime
      dispatch(createNewAnime(formData)).then(() => {
        onHide();
      });
    }
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {initialData ? "Редактировать аниме" : "Добавить новое аниме"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Название аниме</Form.Label>
            <Form.Control
              name="title"
              placeholder="Введите название аниме"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Картинка для аниме</Form.Label>
            <Form.Control
              name="img"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="outline-success" type="submit">
              {initialData ? "Сохранить изменения" : "Добавить"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateAnime;
