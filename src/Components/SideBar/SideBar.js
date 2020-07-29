import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Ref,
  Sidebar,
} from "semantic-ui-react";

import styles from "./SideBar.modules.css";

const VerticalSidebar = ({ animation, direction, visible }) => (
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
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
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
          onClick={this.handleAnimationChange("overlay")}
        />

        <VerticalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
          dimmed={dimmed}
        />
      </div>
    );
  }
}

export default SideBar;
