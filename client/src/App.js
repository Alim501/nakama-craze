import "./App.css";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { checkAuthorization } from "./store/UserSlice";

const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthorization()).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Spinner animation="grow" />;
  }
  return <AppRouter />;
});

export default App;
