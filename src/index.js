import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Link } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <>
      <App />

      <React.Fragment>
        <BrowserRouter>
          <div className="active">
            <Link to="./Shipping">Shipping</Link>
          </div>
        </BrowserRouter>
      </React.Fragment>
    </>
  </React.StrictMode>,
  rootElement
);
