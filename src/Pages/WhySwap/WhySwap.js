import React, { Component } from "react";
import { withRouter } from "react-router";

import styles from "./WhySwap.module.css";
import MenuBar from "../../Components/MenuBar/MenuBar";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

class WhySwap extends Component {
  render() {
    return (
      <div className={styles.upperContainer}>
        <MenuBar />
        <div className={styles.textBox}>
          <span className={styles.centerText}>Why Swap?</span>
        </div>
        <Container className={styles.cardBox}>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Save money</Card.Title>
                <Card.Text className={styles.cardText}>
                  A swap with Swapdrop costs £4.99 inclusive of delivery.
                  <br />
                  <br />
                  Swapping allows you to make use of your existing clothes which
                  would otherwise go unused.
                  <br />
                  <br />
                  Swapping is the most cost friendly way to renew your wardrobe.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Save money</Card.Title>
                <Card.Text className={styles.cardText}>
                  Our Earth can no longer keep up with our endless fast fashion
                  consumption.
                  <br />
                  <br />
                  True fashion is expression. At Swapdrop we believe in
                  expressing our love and commitment to a better future for our
                  planet.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Save money</Card.Title>
                <Card.Text className={styles.cardText}>
                  At Swapdrop we believe that fashion should be easy.We believe
                  that renewing your wardrobe should be quick and stress free.
                  <br />
                  <br />
                  That’s why it take 23 seconds to sign up to Swapdrop, 2 and a
                  half minutes to upload an item.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default withRouter(WhySwap);
