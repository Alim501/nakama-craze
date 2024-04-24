import React, { useContext, useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { login, registration } from "../../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const Auth = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegister = location.pathname === REGISTRATION_ROUTE;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault(); 
    try {
      let data;
      
      if (isLogin) {
        data = await login(email, name, password);
      } else if (isRegister) {
        data = await registration(email, name, password);
      }
      
      user.setUser(data);
      user.setIsAuth(true);
      console.log(user)
      navigate(SHOP_ROUTE)
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
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
                placeholder="Имя пользователя"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegisterName">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                type="text"
                placeholder="почтовый адрес"
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
            <Button type="submit" >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
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
