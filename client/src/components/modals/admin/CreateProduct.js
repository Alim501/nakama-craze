import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../../..";

const CreateProduct = observer(({ show, onHide }) => {
  const { selection } = useContext(Context);
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Название продукта</Form.Label>
            <Form.Control placeholder="Введите название продукта" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Цена</Form.Label>
            <Form.Control type="number" placeholder="Введите цену" />
            <Form.Text className="text-muted">
              Введите цену в тенге, без точек, без знака тенге
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Описание</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Иконка для продукта</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Select>
            <option>Выберите аниме</option>
            {selection.anime.map((anime) => (
              <option key={anime.id} value={anime.id}>{anime.title}</option>
            ))}
          </Form.Select>
          <Form.Select className="mt-3 mb-5">
            <option>Выберите категорию</option>
            {selection.categories.map((category) => (
              <option key={category.id} value={category.id}>{category.title}</option>
            ))}
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
export default CreateProduct;
