import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateCategory = ({show,onHide}) => {
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить новую категорию
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group>
            <Form.Label>Название категории</Form.Label>
            <Form.Control placeholder="Введите название категории" />
          </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-success" onClick={onHide}>Добавить</Button>
    </Modal.Footer>
  </Modal>
  );
};
export default CreateCategory;
