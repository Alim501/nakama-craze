import React from "react";
import NavBar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";
const Layout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <div>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};
export default Layout;
