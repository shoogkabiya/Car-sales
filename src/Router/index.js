import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//screens imports
import Signin from "../screens/Signin";

const Routing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
