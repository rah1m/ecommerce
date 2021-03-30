import React, {FC, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';

import {Product as IProduct} from '@src/@types/product.types';
import Loader from '@src/components/Loader';
import Message from '@src/components/Message';
import Product from '@src/components/Product';
import {useActions} from '@src/hooks/useActions';
import {useTypedSelector} from '@src/hooks/useTypedSelecter';

const HomePage: FC = () => {
    const {fetchProductList} = useActions();

    const {products, error, loading} = useTypedSelector(
        (state) => state.productList,
    );

    useEffect(() => {
        fetchProductList();
    }, []);

    if (error) {
        return <Message variant="danger">{error}</Message>;
    }
    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products?.map((product: IProduct) => (
                    <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomePage;
