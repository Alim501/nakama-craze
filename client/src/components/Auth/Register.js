import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegistration } from "../../store/UserSlice";

const Register = ({ previousLocation }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await dispatch(userRegistration({ email, name, password })).unwrap();

      navigate(previousLocation, { replace: true });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formRegisterEmail">
        <Form.Control
          type="email"
          placeholder="ПОЧТА"
          size="lg"
          className="border-0 AuthInput text-center"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegisterName">
        <Form.Control
          type="text"
          placeholder="ИМЯ"
          size="lg"
          className="border-0 AuthInput text-center"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegisterPassword">
        <Form.Control
          type="password"
          placeholder="ПАРОЛЬ"
          size="lg"
          className="border-0 AuthInput text-center"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" className="w-100 btn rounded-3 text-D9 bg-26 py-3">
        <h3>РЕГИСТРАЦИЯ</h3>
      </Button>
    </Form>
  );
};

export default Register;
