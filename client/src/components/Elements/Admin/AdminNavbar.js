import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import {
  ADMIN_ANIME_ROUTE,
  ADMIN_CATEGORIES_ROUTE,
  ADMIN_COLORS_ROUTE,
  ADMIN_PRODUCTS_ROUTE,
  ADMIN_PROMOCODES_ROUTE,
  ADMIN_ROUTE,
  ADMIN_SIZES_ROUTE,
  ADMIN_USERS_ROUTE,
} from "../../../utils/consts";

const AdminNavbar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link to={ADMIN_ROUTE} className="btn rounded-3 bg-grey me-3 ">
                <h5>Заказы</h5>
              </Link>
              <Link
                to={ADMIN_CATEGORIES_ROUTE}
                className="btn rounded-3 bg-grey me-3"
              >
                <h5>Категории</h5>
              </Link>
              <Link
                to={ADMIN_ANIME_ROUTE}
                className="btn rounded-3 bg-grey me-3 "
              >
                <h5>Аниме</h5>
              </Link>
              <Link
                to={ADMIN_PRODUCTS_ROUTE}
                className="btn rounded-3 bg-grey me-3"
              >
                <h5>Продукты</h5>
              </Link>
              <Link
                to={ADMIN_COLORS_ROUTE}
                className="btn rounded-3 bg-grey me-3"
              >
                <h5>Цвета</h5>
              </Link>
              <Link
                to={ADMIN_SIZES_ROUTE}
                className="btn rounded-3 bg-grey me-3"
              >
                <h5>Размеры</h5>
              </Link>
              <Link
                to={ADMIN_USERS_ROUTE}
                className="btn rounded-3 bg-grey me-3"
              >
                <h5>Пользователи</h5>
              </Link>
              <Link
                to={ADMIN_PROMOCODES_ROUTE}
                className="btn rounded-3 bg-grey me-3"
              >
                <h5>Промокоды</h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};
export default AdminNavbar;