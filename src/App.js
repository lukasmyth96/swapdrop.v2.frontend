import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
