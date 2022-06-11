import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "App";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <HashRouter>
    <App />
  </HashRouter>
);
