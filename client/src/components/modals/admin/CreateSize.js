// src/components/modals/admin/CreateSize.jsx

import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../store/categorySlice";
import { createSize, updateSize } from "../../../http/AdminApi/SizesApi";

const CreateSize = ({ show, onHide, initialData }) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [length, setLength] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [chest, setChest] = useState("");
  const [sleeve, setSleeve] = useState("");
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
      setLength(initialData.length);
      setShoulder(initialData.shoulder);
      setChest(initialData.chest);
      setSleeve(initialData.sleeve);
      setCategoryId(initialData.category.id);
    }
  }, [dispatch, categories.status, initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("code", code);
    // formData.append("category_id", categoryId);
    // formData.append("length", length);
    // formData.append("shoulder", shoulder);
    // formData.append("chest", chest);
    // formData.append("sleeve", sleeve);
    const promocodeData = {
      title,
      code,
      length,
      shoulder,
      chest,
      sleeve,
      category_id: categoryId,
    };
    if (initialData) {
      await updateSize(initialData.id, promocodeData);
    } else {
      await createSize(promocodeData);
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
          <Form.Group>
            <Form.Label>Длина</Form.Label>
            <Form.Control
              name="length"
              type="number"
              placeholder="Введите длину"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Длина плеча</Form.Label>
            <Form.Control
              name="shoulder"
              type="number"
              placeholder="Введите длину плеча"
              value={shoulder}
              onChange={(e) => setShoulder(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Обхват груди</Form.Label>
            <Form.Control
              name="chest"
              type="number"
              placeholder="Введите обхват груди"
              value={chest}
              onChange={(e) => setChest(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Длина рукава</Form.Label>
            <Form.Control
              name="sleeve"
              type="number"
              placeholder="Введите длину рукава"
              value={sleeve}
              onChange={(e) => setSleeve(e.target.value)}
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
