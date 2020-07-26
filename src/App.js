import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import PrivateRoute from "./hoc/PrivateRoute";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import UploadPage from "./Pages/UploadPage/UploadPage";
import WhySwap from "./Pages/WhySwap/WhySwap";
import OurMission from "./Pages/OurMission/OurMission";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Feed from "./Pages/Feed/Feed";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/whyswap" component={WhySwap} />
            <Route exact path="/ourmission" component={OurMission} />
            

            <PrivateRoute>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/upload" component={UploadPage} />
              <Route
                exact
                path="/products/:productId"
                component={ProductDetail}
              />
              <Route exact path="/feed" component={Feed}/>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
