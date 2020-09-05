import React from "react";
import { Card, Button, Image, Placeholder } from "semantic-ui-react";

import styles from "./ReviewOffer.module.css";

const OfferCard = (props) => {
  return (
    <Card centered style={{ width: "100%" }}>
      {props.isLoading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Image src={props.product.image1} />
      )}
      <Card.Content>
        <div className={styles.carouselContentContainer}>
          {props.isLoading ? null : (
            <Card.Header className={styles.header}>
              {props.product.title}
            </Card.Header>
          )}
          <Button.Group>
            <Button
              negative
              size="large"
              onClick={() => props.onReject(props.product.id)}
            >
              Reject
            </Button>
            <Button.Or />
            <Button
              positive
              size="large"
              onClick={() => props.onAccept(props.product.id)}
            >
              Accept
            </Button>
          </Button.Group>
        </div>
      </Card.Content>
    </Card>
  );
};

export default OfferCard;
