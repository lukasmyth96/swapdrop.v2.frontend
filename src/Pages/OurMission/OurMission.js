import React, { Component } from "react";
import { withRouter } from "react-router";

import styles from "./OurMission.module.css";
import MenuBar from "../../Components/MenuBar/MenuBar";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Plant from "../../img/green-leaf-plant-on-pot-824572.png";
import Jake from "../../img/Jake.png";
import Joe from "../../img/Joe.png";
import Laura from "../../img/Laura.png";
import David from "../../img/David.png";

class OurMission extends Component {
  render() {
    return (
      <div>
        <div className={styles.upperContainer}>
          <MenuBar />
        </div>

        <div className={styles.textBox}>
          <div className={styles.wardrobeLife}>
            Give your wardrobe life, say hello to the swapping revolution.
          </div>
        </div>
        <div className={styles.plantBox}>
          <Container>
            <div className="row align-items-center justify-content-between">
              <div className="col-7">
                <div className={styles.socialClothesText}>
                  Swapdrop is a social clothes swapping platform, reinventing
                  the way we consume fashion.
                  <br />
                  <br />
                  Individuals, fashion, change. In that order.
                </div>
              </div>
              <div className="col-2">
                <div className={styles.plantPictureBox}>
                  <img src={Plant} alt="plant" />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className={styles.ourmissionBox}>
            <span className={styles.ourmissionTitle}>
              <div>Our mission.</div>
            </span>
            <br />
            <span className={styles.ourmissionBody}>
              <div className="">
                Swapdrop is a social clothes-swapping platform made by
                individuals, for individuals. We wanted to create a site that
                was built for individuals to take control of their fashion in a
                way that does not exploit each other or our environment.
              </div>
              <br />
              <br />
              <div>
                We believe that fashion is the ultimate expression of an
                individual. We grew tired with resale sites being for sellers
                and not for individuals. We set about changing this - Sticking
                to three key principles:
              </div>
            </span>
          </div>
        </Container>

        <div className={styles.middleArtboard}>
          <div className={styles.teamBox}>
            <Container>
              <h1 className={styles.ourTeam}>Our team</h1>
              <br />
              <br />
              <CardDeck>
                <Card className="shadow p-3 mb-5 bg-white rounded">
                  <Card.Img variant="top" src={Jake} className={styles.img} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      <span className={styles.teamNames}>Jake Smyth</span>
                    </Card.Title>
                    <Card.Text className="text-center">Founder/CEO</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="shadow p-3 mb-5 bg-white rounded">
                  <Card.Img variant="top" src={Joe} className={styles.img} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      <span className={styles.teamNames}>Joe Game</span>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Head of Design{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="shadow p-3 mb-5 bg-white rounded">
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
                <Card className="shadow p-3 mb-5 bg-white rounded">
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

        <Container>
          <div className={styles.ourStoryBox}>
            <span className={styles.ourStoryTitle}>
              <div>Our story, so far.</div>
            </span>
            <br />
            <span className={styles.ourStoryBody}>
              <div className="">
                Swapdrop is a Cardiff and London based early-stage startup,
                having recently graduated from a 12 week startup incubator.
              </div>
              <br />
              <br />
              <div>
                We’re attempting to change the way we consume fashion. We’re
                currently testing our product before a national launch scheduled
                for August.
              </div>
            </span>
          </div>
        </Container>
        <div className={styles.modalBox}>
          <Modal.Dialog className="shadow p-3 mb-5 bg-white rounded" size="xl">
            <Modal.Body>
              <p className={styles.modalBodyText}>Interested?</p>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
              <p className={styles.modalFooterText}>
                Find out more about the work we’re doing at Swapdrop
              </p>
              <Button className={styles.emailUs} variant="danger">
                {" "}
                Email us
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        <div className={styles.bottomColor}></div>
      </div>
    );
  }
}

export default withRouter(OurMission);
