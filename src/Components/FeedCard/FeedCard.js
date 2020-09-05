import React from "react";
import { Card, Image, Placeholder } from "semantic-ui-react";
import PropTypes from "prop-types";

const FeedCard = (props) => {
  return (
    <Card>
      {props.isLoading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Image src={props.product.image1} />
      )}
    </Card>
  );
};

FeedCard.propTypes = {
  isLoading: PropTypes.bool,
  product: PropTypes.object,
};

export default FeedCard;
