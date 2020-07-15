import React, { Component } from "react";
import st from "./Navbar.module.css";
import { withRouter } from "react-router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class MenuBar extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="transparent" expand="lg">
          <Navbar.Brand href="/">
            <span className={st.logo}>Swapdrop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <span className={st.howItWorks}>How it works </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <span className={st.about}>About</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className={st.button}
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
