import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//screens imports
import HomePage from "../screens/HomePage";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

const Routing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/HomePage">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
