import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import SelectionStore from "./store/SelectionStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context.Provider value={{
    user: new UserStore(false,{name:'John',email:'john@mail.ru'}),
    products: new ProductStore(),
    selection:new SelectionStore()
    // ...(user ? { basket: new BasketStore() } : {})
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
reportWebVitals();
