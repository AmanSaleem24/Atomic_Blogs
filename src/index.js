import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import Appv1 from "./App-v1"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appv1 />
  </React.StrictMode>
);
