import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer text-white">
      <Container>
        <Row md={5} xs={3}>
          <Col>
            <h3>NAKAMA</h3>
            <h4>ПОЛЬЗОВАТЕЛЬ</h4>
            <h4>ОФОРМИТЬ ЗАКАЗ</h4>
            <h4>ВОПРОС - ОТВЕТ</h4>
          </Col>
          <Col>
            <h3>О НАС</h3>
            <h4>ПОЛЬЗОВАТЕЛЬ</h4>
            <h4>ОФОРМИТЬ ЗАКАЗ</h4>
            <h4>ВОПРОС - ОТВЕТ</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
