import React from "react";
import { Menu, Container, Sticky } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import styles from "./MenuBarLoggedIn.module.css";

const MenuBarLoggedIn = () => {
  return (
    <div>
      <Sticky>
        <Menu pointing primary>
          <Menu.Item>
            <Link to="/">
              <span className={styles.homepageNavlink}>Swapdrop</span>
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
                    <span className={styles.mainTabNavlinks}>Feed</span>
                  </NavLink>
                </Menu.Item>
              </div>
              <div className="center aligned col">
                <Menu.Item>
                  <NavLink to="/profile">
                    <span className={styles.mainTabNavlinks}>Profile</span>
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
