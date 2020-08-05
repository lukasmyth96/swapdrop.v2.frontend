import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button, Icon, Grid, Placeholder, Image, Transition, Modal } from "semantic-ui-react";

import axios from "../../axiosInstance";

const MakeOfferModal = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [selectedProducts, setSelectedProducts] = useState([])
    let [products, setProducts] = useState([]);
    if (products.length === 0){
        products = Array.apply(null, Array(16)).map(() => ({}));
    }
  
    useEffect(() => {
      setIsLoading(true);
      axios
        .get(`/your-items/`, {
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
    }, []);

    const toggleSelectedProduct = (productId) => {
        let newSelectedProducts;
        if (selectedProducts.includes(productId)) {
            newSelectedProducts = selectedProducts.filter((id) => id !== productId);
        } else {
            newSelectedProducts = [...selectedProducts]
            newSelectedProducts.push(productId)
        }
        console.log(newSelectedProducts);
        setSelectedProducts(newSelectedProducts);
    }

    const modalStyle = {
        margin: '1% 20vw',
        width: '60vw',
        textAlign: 'center'
    };

    const images = products.map((product, idx) => (
        <Grid.Column style={{marginTop: "20px"}} mobile={16} tablet={8} computer={4}>
            {isLoading ? (
                <Placeholder>
                <Placeholder.Image square />
                </Placeholder>
            ) : (
                <Button
                 onClick={() => toggleSelectedProduct(product.id) }
                 style={selectedProducts.includes(product.id) ? {backgroundColor: "red"}: null}>
                    <Image style={{width: "100%"}} src={product.image1} />
                </Button>
            )}
        </Grid.Column>
    ));
    
    return (
        <Transition visible={props.isModalOpen} animation="scale" duration={500}>
            <Modal
            style={modalStyle}
            open={props.isModalOpen}
            onClose={() => props.closeModal()}>
                <Modal.Header>
                    Testing...
                </Modal.Header>
                <Modal.Content scrolling>
                    <Grid centered>
                        {images}
                    </Grid>
                </Modal.Content>

                <Modal.Actions>
                    <Button onClick={props.closeModal} primary>
                    Send Offer <Icon name='chevron right' />
                    </Button>
                </Modal.Actions>

            </Modal>
        </Transition>
    );
}

export default MakeOfferModal;