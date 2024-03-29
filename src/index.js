import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./context/Context";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Context>
        <App />
      </Context>
    </React.StrictMode>
  </BrowserRouter>
);


