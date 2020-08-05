import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon, Grid, Placeholder, Image, Transition, Modal } from "semantic-ui-react";

import axios from "../../axiosInstance";

const MakeOfferModal = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isOfferSending, setIsOfferSending] = useState(false);
    const [error, setError] = useState();
    const [selectedProductIds, setSelectedProductIds] = useState([])
    let [products, setProducts] = useState([]);
    if (products.length === 0) {
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

    const submitOffer = () => {
        setIsOfferSending(true);
        const data = {
            desiredProductId: props.desiredProductId,
            offeredProductIds: selectedProductIds
        };
        axios.post('/offers/make/', data, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        })
        .then(() => {
            props.closeModal();
            props.history.push('/profile');
        })
        .finally(() => setIsOfferSending(false))

    }

    const toggleIsProductSelected = (productId) => {
        let newSelectedProductIds;
        if (selectedProductIds.includes(productId)) {
            newSelectedProductIds = selectedProductIds.filter((id) => id !== productId);
        } else {
            newSelectedProductIds = [...selectedProductIds, productId]
        }
        setSelectedProductIds(newSelectedProductIds);
    }

    const modalStyle = {
        margin: '1% 20vw',
        width: '60vw',
        textAlign: 'center'
    };

    const images = products.map((product, idx) => (
        <Grid.Column key={idx} style={{ marginTop: "20px" }} mobile={16} tablet={8} computer={4}>
            {isLoading ? (
                <Placeholder>
                    <Placeholder.Image square />
                </Placeholder>
            ) : (
                    <span
                        onClick={() => toggleIsProductSelected(product.id)}>
                        <Image
                            src={product.image1}
                            style={selectedProductIds.includes(product.id) ? { boxShadow: "0 0 25px orange" } : null}
                        />
                    </span>
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
                    Select which items you're willing to swap
                </Modal.Header>
                <Modal.Content scrolling>
                    <Grid centered>
                        {images}
                    </Grid>
                </Modal.Content>

                <Modal.Actions>
                    <Button
                        primary
                        disabled={selectedProductIds.length === 0}
                        loading={isOfferSending}
                        onClick={submitOffer}>
                        Send Offer <Icon name='chevron right' />
                    </Button>
                </Modal.Actions>

            </Modal>
        </Transition>
    );
}

export default withRouter(MakeOfferModal);