import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateAnime = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое аниме
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Название аниме</Form.Label>
            <Form.Control placeholder="Введите название аниме" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Картинка для аниме</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateAnime;
