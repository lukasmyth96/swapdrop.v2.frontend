import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Loader, Placeholder } from "semantic-ui-react";

import styles from "./ProductDetail.module.css";

import axios from "../../axiosInstance";

const ProductDetail = (props) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = props.match.params.productId;
    setIsLoading(true);
    axios
      .get(`/products/${productId}`, {
        headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
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
            </>
          )}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductDetail;
