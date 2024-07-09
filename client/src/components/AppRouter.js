import React from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "../routes";
import AdminNavbar from "./Elements/Admin/AdminNavbar";
import Layout from "./Elements/Layout";
import { RequireAuth } from "../hoc/RequireAuth";
import { RequireAdmin } from "../hoc/RequireAdmin";
import Page404 from "../pages/Page404";

const AppRouter = () => {
  function ErrorBoundary() {
    let error = useRouteError();
    console.log(error);
    return <div>Error: {error.message}</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        ...publicRoutes.map(({ path, Component, compLoader }) => ({
          path,
          element: <Component />,
          loader: compLoader,
        })),
        {
          path: "/user",
          element: <RequireAuth ><Outlet></Outlet></RequireAuth>,
          children: authRoutes.map(({ path, Component, compLoader }) => ({
            path,
            element: <Component />,
            loader: compLoader,
          })),
        },
        {
          path: "/admin",
          element: (
            <RequireAuth>
              <RequireAdmin>
                <AdminNavbar />
              </RequireAdmin>
            </RequireAuth>
          ),
          children: adminRoutes.map(({ path, Component, compLoader }) => ({
            path,
            element: <Component />,
            loader: compLoader,
          })),
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
