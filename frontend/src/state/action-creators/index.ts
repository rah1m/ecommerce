import axios from 'axios';
import {Dispatch} from 'redux';

import {ProductActionType, ProductListActionType} from '../action-types';
import {ProductAction} from '../actions/productActions';
import {Action} from '../actions/productListActions';

export const fetchProductList = () => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
        dispatch({
            type: ProductListActionType.PRODUCT_LIST_REPOSITORIES,
        });
        try {
            const {data} = await axios.get(
                'http://localhost:5000/api/products',
            );

            dispatch({
                type: ProductListActionType.PRODUCT_LIST_REPOSITORIES_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: ProductListActionType.PRODUCT_LIST_REPOSITORIES_ERROR,
                payload: err?.response?.data?.message,
            });
        }
    };
};

export const fetchProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>): Promise<void> => {
        dispatch({
            type: ProductActionType.PRODUCT_REPOSITORIES_REQUEST,
        });

        try {
            const {data} = await axios.get(
                `http://localhost:5000/api/products/${id}`,
            );
            dispatch({
                type: ProductActionType.PRODUCT_REPOSITORIES_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: ProductActionType.PRODUCT_REPOSITORIES_ERROR,
                payload: err?.response?.data?.message,
            });
        }
    };
};
