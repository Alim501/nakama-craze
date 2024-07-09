import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  createNewCategory,
  updateExistingCategory,
} from "../../../store/categorySlice";

const CreateCategory = ({ show, onHide, initialData }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
    }
  }, [initialData]);
  async function handleSubmit(e) {
    e.preventDefault();

    if (initialData) {
      // Update existing category
      dispatch(updateExistingCategory({id:initialData.id, title:title})).then(() => {
        onHide();
      });
    } else {
      // Create new category
      dispatch(createNewCategory(title)).then(() => {
        onHide();
      });
    }
  }
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {initialData ? "Редактировать категорию" : "Добавить новую категорию"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Название категории</Form.Label>
            <Form.Control
              name="title"
              placeholder="Введите название категории"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
export default CreateCategory;
