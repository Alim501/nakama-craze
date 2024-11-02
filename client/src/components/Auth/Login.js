import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/UserSlice";

const Login = ({ previousLocation }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await dispatch(userLogin({ email, name, password })).unwrap();
      
      navigate(previousLocation, { replace: true });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Control
          type="email"
          placeholder="ПОЧТА"
          className="border-0 AuthInput text-center"
          size="lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginName">
        <Form.Control
          type="text"
          placeholder="Имя пользователя"
          className="border-0 AuthInput text-center"
          size="lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Control
          type="password"
          placeholder="ПАРОЛЬ"
          className="border-0 AuthInput text-center"
          size="lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        type="submit"
        className="w-100 btn text-D9 rounded-3 bg-26 mb-3 py-3"
      >
        <h3>ВОЙТИ</h3>
      </Button>
    </Form>
  );
};

export default Login;
