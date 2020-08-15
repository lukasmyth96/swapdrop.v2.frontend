import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button, Image } from "semantic-ui-react";

import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import axios from "../../axiosInstance";
import styles from "./ReviewOffer.module.css";
import OfferCard from "./OfferCard";

const ReviewOffer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  const productId = props.match.params.productId;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/offers/review/${productId}/`, {
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
  }, [productId]);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const offerCards = products.map((product, idx) => (
    <Carousel.Item>
      <OfferCard key={idx} product={product} />
    </Carousel.Item>
  ));

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        interval={10000000}
      >
        {offerCards}
      </Carousel>
    </div>
  );
};

export default ReviewOffer;
