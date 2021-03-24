import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';

import {IProduct} from '@src/assets/models/product';
import Product from '@src/components/Product';

const HomePage: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products').then((res) => {
            setProducts(res?.data);
        });
    }, []);

    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products?.map((product) => (
                    <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomePage;
