import React from "react";
import { Menu, Container, Sticky } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import styles from "./MenuBarLI.module.css";

const MenuBarLoggedIn = () => {
  return (
    <div>
      <Sticky>
        <Menu pointing primary>
          <Menu.Item>
            <Link to="/">
              <span className={styles.swapdrop}>Swapdrop</span>
            </Link>
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
                <Menu.Item>
                  <NavLink to="/feed">
                    <span className={styles.text}>Feed</span>
                  </NavLink>
                </Menu.Item>
              </div>
              <div className="center aligned col">
                <Menu.Item>
                  <NavLink to="/profile">
                    <span className={styles.text}>Profile</span>
                  </NavLink>
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
};

export default MenuBarLoggedIn;
