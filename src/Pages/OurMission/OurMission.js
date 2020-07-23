import React, { Component } from "react";
import { withRouter } from "react-router";

import styles from "./OurMission.module.css";
import MenuBar from "../../Components/MenuBar/MenuBar";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

import Jake from "../../img/Jake.png";
import Joe from "../../img/Joe.png";
import Laura from "../../img/Laura.png";
import David from "../../img/David.png";

class OurMission extends Component {
  render() {
    return (
      <div className={styles.upperContainer}>
        <MenuBar />
        <div className={styles.textBox}>
          <div className={styles.wardrobeLife}>
            Give your wardrobe life, say hello to the swapping revolution.
          </div>
        </div>
        <Container>
          <div className={styles.ourmissionBox}>
            <span className={styles.ourmissionTitle}>Our mission.</span>
            <br />
            <br />
            <span className={styles.ourmissionBody1}>
              Swapdrop is a social clothes-swapping platform made by
              individuals, for individuals. We wanted to create a site that was
              built for individuals to take control of their fashion in a way
              that does not exploit each other or our environment.
              <br />
              <br />
            </span>
            <span className={styles.ourmissionBody2}>
              We believe that fashion is the ultimate expression of an
              individual. We grew tired with resale sites being for sellers and
              not for individuals. We set about changing this - Sticking to
              three key principles:
            </span>
          </div>
        </Container>

        <div className={styles.teamBox}>
          <Container>
            <h1 className={styles.ourTeam}>Our team</h1>
            <br />
            <br />
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={Jake} className={styles.img} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <span className={styles.teamNames}>Jake Smyth</span>
                  </Card.Title>
                  <Card.Text className="text-center">Founder/CEO</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Joe} className={styles.img} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <span className={styles.teamNames}>Joe Game</span>
                  </Card.Title>
                  <Card.Text className="text-center">Head of Design </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Laura} className={styles.img} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <span className={styles.teamNames}>Laura Kane</span>
                  </Card.Title>
                  <Card.Text className="text-center">
                    Head of Marketing
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={David} className={styles.img} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <span className={styles.teamNames}>David-Ovidiu Nae</span>
                  </Card.Title>
                  <Card.Text className="text-center">
                    Software Engineer
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(OurMission);
