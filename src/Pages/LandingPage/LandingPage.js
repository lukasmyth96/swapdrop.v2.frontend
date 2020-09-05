import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import styles from "./LandingPage.module.css";
import MenuBar from "../../Components/MenuBar/MenuBar";

class LandingPage extends Component {
  render() {
    return (
      <div className={styles.upperContainer}>
        <Container>
          <div className={styles.rightImageContainer}>
            <div className={styles.rightLaptop}></div>
            <div className={styles.rightPhone}></div>
          </div>
          <div className={styles.MenuBarBox}>
            <div className="justify-content-end">
              <MenuBar />
            </div>
          </div>

          <div className={styles.text}>
            <div className={styles.exploreSwapDrop}>
              Explore. Swap. Drop. <br />A new way to shop.
            </div>
          </div>
          <div className={styles.signupButtonsContainer}>
            <Button
              className={styles.startNow}
              variant="danger"
              onClick={() => this.props.history.push("/signup")}
            >
              <span className={styles.startNowText}>Start now {">"}</span>
            </Button>{" "}
            <Link href="/findoutmore">
              <span className={styles.findOutMore}>Find out more</span>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
