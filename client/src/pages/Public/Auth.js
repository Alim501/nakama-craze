import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { userLogin, userRegistration } from "../../store/UserSlice";

const Auth = () => {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegister = location.pathname === REGISTRATION_ROUTE;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isLogin) {
        await dispatch(userLogin({ email, name, password })).unwrap();
      } else if (isRegister) {
        await dispatch(userRegistration({ email, name, password })).unwrap();
      }
      navigate(fromPage, { replace: true });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <Container>
      <Card>
        {isLogin ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control
                type="email"
                placeholder="почтовый адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginName">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Имя пользователя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">ВОЙТИ</Button>
          </Form>
        ) : isRegister ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control
                type="email"
                placeholder="почтовый адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegisterName">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Имя пользователя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegisterPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
          </Form>
        ) : (
          <Card.Body>
            <Link to={LOGIN_ROUTE} className="btn rounded-3 bg-grey me-3">
              <h5>ВОЙТИ</h5>
            </Link>
            <Link
              to={REGISTRATION_ROUTE}
              className="btn rounded-3 bg-grey me-3"
            >
              <h5>ЗАРЕГИСТРИРОВАТЬСЯ</h5>
            </Link>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};

export default Auth;
