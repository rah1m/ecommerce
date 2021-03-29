import React, {FC, useEffect} from 'react';
import {Button, Card, Col, Image, ListGroup, Row} from 'react-bootstrap';
import {NavLink, useParams} from 'react-router-dom';

import products from '@src/assets/data/products';
import {IProduct} from '@src/assets/models/product';
import Rating from '@src/components/Rating';
import {useActions} from '@src/hooks/useActions';
import {useTypedSelector} from '@src/hooks/useTypedSelecter';

interface IParams {
    id?: string;
}
const ProductPage: FC = () => {
    const {id} = useParams<IParams>();

    const {fetchProduct} = useActions();

    const {products: product, error, loading} = useTypedSelector(
        (state) => state.product,
    );

    useEffect(() => {
        if (id) fetchProduct(id);
    }, [id]);
    console.log(!!product);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        <>
            <NavLink to="/" className="btn btn-dark my-3">
                Go Back
            </NavLink>
            {product && (
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
            )}
        </>
    );
};

export default ProductPage;
