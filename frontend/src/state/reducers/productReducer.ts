import {Product} from '@src/@types/product.types';

import {ProductActionType} from '../action-types';
import {ProductAction} from '../actions/productActions';

export interface ProductState {
    loading: boolean;
    error: string | null;
    products: Product;
}

const initialState = {
    loading: false,
    error: null,
    products: {},
};

export const productReducer = (
    state: ProductState = initialState,
    action: ProductAction,
): ProductState => {
    switch (action.type) {
        case ProductActionType.PRODUCT_REPOSITORIES_REQUEST:
            return {
                loading: true,
                error: null,
                products: {},
            };

        case ProductActionType.PRODUCT_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                error: null,
                products: action.payload,
            };
        case ProductActionType.PRODUCT_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                products: {},
            };
        default:
            return state;
    }
};
