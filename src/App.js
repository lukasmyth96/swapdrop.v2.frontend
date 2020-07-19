import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import UploadPage from "./Pages/UploadPage/UploadPage";

class App extends Component {
  state = {
    authenticated: localStorage.getItem("token") !== null,
  };

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );

    if (this.state.authenticated) {
      routes = (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/upload" component={UploadPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      );
    }

    return (
      <div>
        <Router>{routes}</Router>
      </div>
    );
  }
}

export default App;
