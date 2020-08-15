import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button, Image } from "semantic-ui-react";

import styles from "./ReviewOffer.module.css";
import OfferCard from "./OfferCard";

const ReviewOffer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      image1:
        "https://d2h1pu99sxkfvn.cloudfront.net/b0/8250408/762454115_f9b5d7b54d374e26b2245624a9023508/P0.jpg",
      title: "Nike Shoes",
    },
    {
      image1:
        "https://d2h1pu99sxkfvn.cloudfront.net/b0/1375287/742702596_c85f69a5c9ee41d18ac18cac49bf0326/P0.jpg",
      title: "White shirt",
    },
  ];

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const offerCards = products.map((product, idx) => (
    <Carousel.Item> 
        <OfferCard key={idx} product={product}/>
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
