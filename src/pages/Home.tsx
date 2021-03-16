import React, {FC} from 'react';
import {Col, Row} from 'react-bootstrap';

import products from '@src/assets/data/products';
import Product from '@src/components/Product';

const HomePage: FC = () => {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomePage;
