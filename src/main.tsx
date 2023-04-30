import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import { App } from "./App";
import "./index.css";

import "semantic-ui-css/semantic.min.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
