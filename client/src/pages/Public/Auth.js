import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegister = location.pathname === REGISTRATION_ROUTE;

  const previousLocation = location.state?.from || "/";

  return (
    <div className="bg-black h-71vh align-content-center">
      <Container>
        <Card className="w-25 mx-auto rounded-4 bg-F5">
          <Card.Body>
            {isLogin ? (
              <Login previousLocation={previousLocation} />
            ) : isRegister ? (
              <Register previousLocation={previousLocation} />
            ) : (
              <div>
                <Link
                  to={LOGIN_ROUTE}
                  state={{ from: previousLocation }}
                  className="w-100 btn text-D9 rounded-3 bg-26 mb-3 py-3"
                >
                  <h3>ВОЙТИ</h3>
                </Link>
                <Link
                  to={REGISTRATION_ROUTE}
                  state={{ from: previousLocation }}
                  className="w-100 btn rounded-3 text-D9 bg-26 py-3"
                >
                  <h3>РЕГИСТРАЦИЯ</h3>
                </Link>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Auth;
