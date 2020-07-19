import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import PrivateRoute from "./hoc/PrivateRoute"
import LandingPage from "./Pages/LandingPage/LandingPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import UploadPage from "./Pages/UploadPage/UploadPage";

class App extends Component {
 
  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />

            <PrivateRoute>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/upload" component={UploadPage} />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
