import React from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegister = location.pathname === REGISTRATION_ROUTE;
  return (
    <Container>
      <Card>
        {isLogin ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control type="email" placeholder="почтовый адрес" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="пароль" />
            </Form.Group>
            <Button type="submit">ВОЙТИ</Button>
          </Form>
        ) : isRegister ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control type="email" placeholder="почтовый адрес" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="пароль" />
            </Form.Group>
            <Button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
          </Form>
        ) : (
          <CardBody>
            <Link to={LOGIN_ROUTE} className="btn rounded-3 bg-grey me-3">
              <h5>ВОЙТИ</h5>
            </Link>
            <Link
              to={REGISTRATION_ROUTE}
              className="btn rounded-3 bg-grey me-3"
            >
              <h5>ЗАРЕГИСТРИРОВАТЬСЯ</h5>
            </Link>
          </CardBody>
        )}
      </Card>
    </Container>
  );
};
export default Auth;
