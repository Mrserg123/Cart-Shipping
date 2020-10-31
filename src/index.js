import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Shipping from "./Shipping";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <div className="content">
          <nav>
            <ul>
              <li className="content_li">
                <Link to="/shipping">Shipping</Link>
              </li>
              <li className="content_li">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/shipping">
              <Shipping />
            </Route>
            <Route path="/cart">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  </React.StrictMode>,
  rootElement
);
