import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .catch(() => {
        user.setIsAuth(false)
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(user.isAuth)
  console.log(localStorage.getItem("token"))
  if (loading) {
    return <Spinner animation="grow" />;
  }
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
});

export default App;
