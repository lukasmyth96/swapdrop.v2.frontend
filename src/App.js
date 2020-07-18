import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";


class App extends Component {

  state = {
    authenticated: localStorage.getItem("token") !== null,
  };


  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />

          {this.state.authenticated ?
            <Route exact path="/profile" component={Profile} />
            : <Redirect to="/login"/>}

        </Router>
      </div>
    );
  }

}

export default App;
