import React, { Component } from "react";
import { withRouter } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "./MenuBar.module.css";
import { NavbarBrand } from "react-bootstrap";

class MenuBar extends Component {
  render() {
    return (
      <Navbar bg="transparent sticky-top" expand="lg">
        <Navbar.Brand href="/">
          <span className={styles.logo}>Swapdrop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link>
                <span className={styles.about}>How it works </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/whyswap">
                  <span className={styles.about}>Why Swap</span>
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/ourmission">
                  <span className={styles.howItWorks}>Our Mission</span>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Button
                className={styles.button}
                variant="danger"
                size="sm"
                onClick={() => this.props.history.push("/login")}
              >
                Sign In {">"}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(MenuBar);
