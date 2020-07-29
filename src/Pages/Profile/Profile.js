import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { Button } from "semantic-ui-react"

import FeedGrid from '../../Components/FeedGrid/FeedGrid'
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import axios from "../../axiosInstance";

const Profile = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/your-items/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

    return (
      <>  
        <div style={{textAlign: "center"}}>
          <h1>Welcome to your profile</h1>
          <Link to="/upload">
            <Button positive size="huge">
              Upload
            </Button>
          </Link>
        </div>
        <div>
          {error ? (
            <ErrorMessage error={error} />
          ) : (
              <FeedGrid products={products} isLoading={isLoading} />
            )}
        </div>
      </>
>>>>>>> origin/develop
    );
}

export default Profile;
