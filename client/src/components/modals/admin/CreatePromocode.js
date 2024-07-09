import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createPromocode, updatePromocode } from "../../../http/AdminApi/Promocode";
import moment from "moment";

const CreatePromocode = ({ show, onHide, initialData }) => {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [expireAt, setExpireAt] = useState("");

  useEffect(() => {
    if (initialData) {
      setCode(initialData.code);
      setPercent(initialData.percent);
      setExpireAt(initialData.expire_at ? moment(initialData.expire_at).format('YYYY-MM-DD') : "");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promocodeData = { code, percent, expire_at: expireAt };
    if (initialData) {
      await updatePromocode(initialData.id, promocodeData);
    } else {
      await createPromocode(promocodeData);
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {initialData ? "Редактировать промокод" : "Добавить новый промокод"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Код промокода</Form.Label>
            <Form.Control
              name="code"
              placeholder="Введите код промокода"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Процент промокода</Form.Label>
            <Form.Control
              name="percent"
              placeholder="Введите процент промокода"
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Срок действия промокода</Form.Label>
            <Form.Control
              type="date"
              name="expireAt"
              placeholder="Введите срок действия промокода"
              value={expireAt}
              onChange={(e) => setExpireAt(e.target.value)}
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

export default CreatePromocode;
