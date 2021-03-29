import React, {FC, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';

import {Product as IProduct} from '@src/@types/product.types';
import Product from '@src/components/Product';
import {useActions} from '@src/hooks/useActions';
import {useTypedSelector} from '@src/hooks/useTypedSelecter';

const HomePage: FC = () => {
    const {fetchProductList} = useActions();

    const {products, error} = useTypedSelector((state) => state.productList);

    useEffect(() => {
        fetchProductList();
    }, []);

    if (error) {
        return <h1>{error}</h1>;
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
