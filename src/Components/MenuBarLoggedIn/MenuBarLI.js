import React, { Component } from "react";
import { Menu, Container, Sticky, } from "semantic-ui-react";

import SideBar from "../SideBar/SideBar";
import styles from "./MenuBarLI.module.css";

export default class MenuBarLI extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Sticky>
          <Menu pointing primary>
            <Menu.Item>
              <span className={styles.swapdrop}>Swapdrop</span>
            </Menu.Item>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="center aligned row">
                <div className="center aligned col">
                  <Menu.Item
                    name="Feed"
                    active={activeItem === "Feed"}
                    onClick={this.handleItemClick}
                  >
                    <span className={styles.text}>Feed</span>
                  </Menu.Item>
                </div>
                <div className="center aligned col">
                  <Menu.Item
                    name="Profile"
                    active={activeItem === "Profile"}
                    onClick={this.handleItemClick}
                  >
                    <span className={styles.text}>Profile</span>
                  </Menu.Item>
                </div>
              </div>
            </Container>

            <Menu.Menu position="right">
              <Menu.Item>
                <SideBar />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Sticky>
      </div>
    );
  }
}
