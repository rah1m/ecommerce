import React, {FC} from 'react';
import {Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import {IProduct} from '@src/assets/models/product';

import Rating from './Rating';

interface IProps {
    product?: IProduct;
}
const Product: FC<IProps> = ({product}) => {
    const {Body, Img, Text, Title} = Card;

    return (
        <Card className="my-3 p-3 rounded">
            <NavLink to={`/product/${product?._id}`}>
                <Img src={product?.image} variant="top" />
            </NavLink>
            <Body>
                <NavLink to={`/product/${product?._id}`}>
                    <Title as="div">
                        <strong>{product?.name}</strong>
                    </Title>
                </NavLink>
                <Text as="div">
                    <Rating
                        value={product?.rating}
                        text={`${product?.numReviews} reviews`}
                    />
                </Text>
                <Text className="pt-1" as="h3">
                    ${product?.price}
                </Text>
            </Body>
        </Card>
    );
};

export default Product;
