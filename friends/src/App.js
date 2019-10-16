import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Display from "./components/Display";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/friendsdisplay">My Friends</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friendsdisplay" component={Display} />
      </Switch>
    </Router>
  );
}

export default App;
