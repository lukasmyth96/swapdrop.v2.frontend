import React, { useState, useEffect } from "react";
import { Card, Image, Placeholder, Grid } from "semantic-ui-react";

import FeedCard from "../../Components/FeedCard/FeedCard";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import axios from "../../axiosInstance";
import { Link } from "react-router-dom";

const Feed = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const getEmptyProducts = () =>
    Array.apply(null, Array(12)).map(function () {
      return {};
    });
  const [products, setProducts] = useState(getEmptyProducts());

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

  const cards = products.map((product, idx) => (
    <Link key={idx} to={`/products/${product.id}`}>
      <Grid.Column style={{marginTop: "20px"}} mobile={16} tablet={8} computer={4}>
        <FeedCard isLoading={isLoading} product={product} />
      </Grid.Column>
    </Link>
  ));

  return (
    <>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <Grid centered>
          {cards}
        </Grid>
      )}
    </>
  );
};

export default Feed;
