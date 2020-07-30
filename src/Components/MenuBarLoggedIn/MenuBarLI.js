import React, { Component } from "react";
import { Menu, Segment, Container } from "semantic-ui-react";

import SideBar from "../SideBar/SideBar";
import styles from "./MenuBarLI.module.css";

export default class MenuBarLI extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item className={styles.text}>Swapdrop</Menu.Item>
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
                  className={styles.text}
                  name="Feed"
                  active={activeItem === "Feed"}
                  onClick={this.handleItemClick}
                />
              </div>
              <div className="center aligned col">
                <Menu.Item
                  className={styles.text}
                  name="Profile"
                  active={activeItem === "Profile"}
                  onClick={this.handleItemClick}
                />
              </div>
            </div>
          </Container>

          <Menu.Menu position="right">
            <Menu.Item>
              <SideBar />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
