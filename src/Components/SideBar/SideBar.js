import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const SideBarTest = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Icon
        link
        name="bars"
        size="big"
        label={{ children: <code>visible</code> }}
        onClick={() => setVisible(true)}
      />
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        direction="right"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
        animation="push"
      >
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
      </Sidebar>
    </>
  );
};

export default SideBarTest;
