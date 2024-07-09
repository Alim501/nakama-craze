// src/components/modals/admin/CreateSize.jsx

import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../store/categorySlice";
import { createSize, updateSize } from "../../../http/AdminApi/SizesApi";

const CreateSize = ({ show, onHide, initialData }) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [img, setImg] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.status === "idle") {
      dispatch(fetchCategories());
    }
    if (initialData) {
      setTitle(initialData.title);
      setCode(initialData.code);
      setImg(null); // To keep current image as is
      setCategoryId(initialData.category.id);
    }
  }, [dispatch, categories.status, initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("code", code);
    formData.append("category_id", categoryId);
    if (img) {
      formData.append("img", img);
    }

    if (initialData) {
      await updateSize(initialData.id, formData);
    } else {
      await createSize(formData);
    }

    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {initialData ? "Редактировать размер" : "Добавить новый размер"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Название размера</Form.Label>
            <Form.Control
              name="title"
              placeholder="Введите название размера"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Буква размера</Form.Label>
            <Form.Control
              name="title"
              placeholder="Введите букву размера"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Картинка для размера</Form.Label>
            <Form.Control
              name="img"
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </Form.Group>
          <Form.Select
            className="mt-3 mb-5"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option>Выберите категорию</option>
            {categories.items.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </Form.Select>
          <Modal.Footer>
            <Button variant="outline-success" type="submit">
              {initialData ? "Сохранить изменения" : "Добавить"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateSize;
