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

//components imports
import HeadSection from "../components/HeadSection/index";

const Routing = () => {
  return (
    <div className="Page">
      <Router>
        <HeadSection />
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>

          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
