import React, { useState, useEffect } from "react";

import FeedGrid from '../../Components/FeedGrid/FeedGrid'
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import axios from "../../axiosInstance";
import MenuBarLoggedIn from "../../Components/MenuBarLoggedIn/MenuBarLoggedIn";

const Feed = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/feed/`, {
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
    <MenuBarLoggedIn/>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <FeedGrid products={products} isLoading={isLoading}/>
      )}
    </>
  );
};

export default Feed;
