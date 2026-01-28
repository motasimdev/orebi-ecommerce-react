import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
// import store from "./app/store";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store.js";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
        <ToastContainer theme="light"/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
