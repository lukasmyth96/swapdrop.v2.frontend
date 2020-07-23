import React, { Component } from "react";
import { withRouter } from "react-router";

import styles from "./WhySwap.module.css";
import MenuBar from "../../Components/MenuBar/MenuBar";

class WhySwap extends Component {
  render() {
    return (
      <div className={styles.upperContainer}>
        <MenuBar />
        <div className={styles.textBox}>
          <span className={styles.centerText}>Why Swap?</span>
        </div>
      </div>
    );
  }
}

export default withRouter(WhySwap);
