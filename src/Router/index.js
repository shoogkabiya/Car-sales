import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//screens imports
import Signin from "../screens/Signin/Signin";
import Signup from "../screens/Signup/Signup";
import PageCars from "../screens/PageCars/index";
import UploadForm from "../screens/UploadCars/UploadForm";

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
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/UploadForm">
            <UploadForm />
          </Route>
          <Route path="/Cars">
            <PageCars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
