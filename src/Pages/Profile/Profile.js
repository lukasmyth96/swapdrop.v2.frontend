import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Ref } from "semantic-ui-react";

import MenuBarLI from "../../Components/MenuBarLoggedIn/MenuBarLI";
import SideBar from "../../Components/SideBar/SideBar";

class Profile extends Component {
  render() {
    const segmentRef = React.useRef();
    return (
      <Ref innerRef={segmentRef}>
        <MenuBarLI />
        <Link to="/upload">Upload product</Link>
      </Ref>
    );
  }
}

export default Profile;
