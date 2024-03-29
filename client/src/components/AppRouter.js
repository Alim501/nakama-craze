import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "..";
import NavBar from "./Navbar";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        {user._isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component></Component>}
              exact
            />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component></Component>}
            exact
          />
        ))}
      </Routes>
    </div>
  );
};
export default AppRouter;
