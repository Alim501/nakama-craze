import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  if (user.role !== "admin") {
    return <Navigate to={"/"} state={{ from: location }} />;
  }
  return children;
};

export { RequireAdmin };
