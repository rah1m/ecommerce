import {Product} from '@src/@types/product.types';

import {ProductActionType} from '../action-types';
import {ProductAction} from '../actions/productActions';

export interface ProductState {
    loading: boolean;
    error: string | null;
    product: Product;
}

const initialState = {
    loading: false,
    error: null,
    product: {},
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
                product: {},
            };

        case ProductActionType.PRODUCT_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                error: null,
                product: action.payload,
            };
        case ProductActionType.PRODUCT_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                product: {},
            };
        default:
            return state;
    }
};
