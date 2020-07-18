import React, { Component } from "react";
import { withRouter } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import styles from "./MenuBar.module.css";

class MenuBar extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="transparent" expand="lg">
          <Navbar.Brand href="/">
            <span className={styles.logo}>Swapdrop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <span className={styles.howItWorks}>How it works </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <span className={styles.about}>About</span>
                </Nav.Link>
              </Nav.Item>
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
      </Container>
    );
  }
}
export default withRouter(MenuBar);
