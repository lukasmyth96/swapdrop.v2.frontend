import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

import styles from "./SideBar.modules.css";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <>
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <ui>
        <Menu.Item as="a">
          <Icon name="map marker alternate" />
          Shipping Address
        </Menu.Item>

        <Menu.Item as="a">
          {" "}
          <Icon name="question circle outline" /> FAQs
        </Menu.Item>

        <Menu.Item as="a">
          <Icon name="file alternate outline" />
          Terms of Service
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="privacy" />
          Privacy Agreement
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="arrow alternate circle right outline" />
          Logout
        </Menu.Item>
      </ui>
    </Sidebar>
  </>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
};

class SideBar extends Component {
  state = {
    animation: "overlay",
    direction: "right",
    dimmed: true,
    visible: false,
  };
  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }));

  render() {
    const { animation, dimmed, direction, visible } = this.state;

    return (
      <div>
        <Icon
          link
          name="bars"
          size="big"
          onClick={this.handleAnimationChange("overlay")}
        />

        <VerticalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
        />
      </div>
    );
  }
}

export default SideBar;
