import React from 'react';
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import FeedCard from "../FeedCard/FeedCard";

const FeedGrid = (props) => {

    let products = props.products;
    if (products.length === 0){
        products = Array.apply(null, Array(16)).map(() => ({}));
    }

    const cards = products.map((product, idx) => (
        <Link key={idx} to={`/products/${product.id}`}>
          <Grid.Column style={{marginTop: "20px"}} mobile={16} tablet={8} computer={4}>
            <FeedCard isLoading={props.isLoading} product={product} />
          </Grid.Column>
        </Link>
      ));

    return (
        <Grid centered>
          {cards}
        </Grid>
    );
}

FeedCard.propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.array,
  };

export default FeedGrid;