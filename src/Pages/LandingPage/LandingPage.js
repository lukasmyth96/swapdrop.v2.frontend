import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";

import st from "./LandingPage.module.css";
import MenuBar from "../../Components/MenuBar";
import img from "../../img/clay-macbook-pro-15-with-touch-bar-front-view-mockup@2x.png"
class LandingPage extends Component {
  render() {
    return (
      <div className={st.upperContainer}>
        <Container>
          <div className={st.items}>
            <div className={st.rightLaptop}></div>
            <div className={st.rightPhone}></div>
          </div>
          <div className={st.MenuBarBox}>
            <div className="justify-content-end">
          <MenuBar />
          </div>
          </div>
        
          <div className={st.text}>
          <div className={st.leftText}>
            Explore. Swap. Drop. <br />A new way to shop.
              </div>
              </div>
              <div className={st.buttons}>
          <Button
            className={st.startNow}
            variant="danger"
            onClick={() => this.props.history.push("/signup")}
          >
            <span className={st.startNowText}>Start now {">"}</span>
          </Button>{" "}
          <Link href="/findoutmore">
            <span className={st.findOutMore}>Find out more</span>
          </Link>
          </div>
        </Container>
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
