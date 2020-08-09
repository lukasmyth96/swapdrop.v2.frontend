import React, { useState, useEffect } from "react";
import { Card, Button, Image, Placeholder } from "semantic-ui-react";

import styles from "./ProductDetail.module.css";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import MakeOfferModal from "../../Components/MakeOfferModal/MakeOfferModal"
import axios from "../../axiosInstance";
import MenuBarLoggedIn from "../../Components/MenuBarLoggedIn/MenuBarLoggedIn";

const ProductDetail = (props) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productId = props.match.params.productId;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/products/${productId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  const makeOfferModal = isModalOpen && (
    <MakeOfferModal
      isModalOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
      desiredProductId={productId}
    />
  )

  return (
    <>
      <MenuBarLoggedIn />
      {error ?
        <ErrorMessage error={error} />
        :
        <>
          {makeOfferModal}
          <div className={styles.CardContainer}>
            <Card centered style={{ width: "100%" }}>

              {isLoading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                  <Image src={product.image1} />
                )}
                
              <Card.Content>
                {isLoading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                  </Placeholder>
                ) : (
                    <>
                      <Card.Header>{product.title}</Card.Header>
                      <Button
                        positive
                        content='Make Offer'
                        icon='right arrow'
                        labelPosition='right'
                        onClick={() => setIsModalOpen(true)} />
                    </>
                  )}
              </Card.Content>
            </Card>
          </div>
        </>
      }
    </>
  );
};

export default ProductDetail;
