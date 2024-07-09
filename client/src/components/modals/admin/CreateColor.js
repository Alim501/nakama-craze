import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createColor, updateColor } from "../../../http/AdminApi/ColorApi";

const CreateColor = ({ show, onHide, initialData }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#563d7c");
  const [textColor, setTextColor] = useState("#563d7c");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setColor(initialData.color);
      setTextColor(initialData.text_color);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, color, text_color: textColor };

    if (initialData) {
      await updateColor(initialData.id, data);
    } else {
      await createColor(data);
    }

    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {initialData ? "Редактировать цвет" : "Добавить новый цвет"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Название цвета</Form.Label>
            <Form.Control
              name="title"
              placeholder="Введите название цвета"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group  className="mb-3">
            <Form.Label htmlFor="exampleColorInput">Цвет</Form.Label>
            <Form.Control
              type="color"
              id="ColorInput"
              value={color}
              title="Выбери цвет"
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>
          <Form.Group  className="mb-3">
            <Form.Label htmlFor="exampleColorInput">Цвет для текста</Form.Label>
            <Form.Control
              type="color"
              id="TextColorInput"
              value={textColor}
              title="Выбери цвет"
              onChange={(e) => setTextColor(e.target.value)}
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
};

export default CreateColor;
