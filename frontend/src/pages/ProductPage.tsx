import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import {Button, Card, Col, Image, ListGroup, Row} from 'react-bootstrap';
import {NavLink, useParams} from 'react-router-dom';

import products from '@src/assets/data/products';
import {IProduct} from '@src/assets/models/product';
import Rating from '@src/components/Rating';

interface IParams {
    id?: string;
}
const ProductPage: FC = () => {
    const {id} = useParams<IParams>();

    const [product, setProduct] = useState<IProduct | null>(null);
    // const product = products?.find((pro) => pro._id === id) as IProduct;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
            setProduct(res.data);
        });
    }, []);

    return (
        <>
            <NavLink to="/" className="btn btn-dark my-3">
                Go Back
            </NavLink>
            <Row>
                <Col md={6}>
                    <Image src={product?.image} alt={product?.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product?.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product?.rating}
                                text={`${product?.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product?.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product?.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product?.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {(product?.countInStock || 0) > 0
                                            ? 'In Stock'
                                            : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    className="btn-block"
                                    disabled={product?.countInStock === 0}
                                >
                                    Add to cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductPage;
