import {Product} from '@src/@types/product.types';

import {ProductListActionType} from '../action-types';
import {Action} from '../actions/productListActions';

export interface ProductListState {
    loading: boolean;
    error: string | null;
    products: Product[];
}

const initialState = {
    loading: false,
    error: null,
    products: [],
};

export const productListReducer = (
    state: ProductListState = initialState,
    action: Action,
): ProductListState => {
    switch (action.type) {
        case ProductListActionType.PRODUCT_LIST_REPOSITORIES:
            return {
                loading: true,
                error: null,
                products: [],
            };

        case ProductListActionType.PRODUCT_LIST_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                error: null,
                products: action.payload,
            };
        case ProductListActionType.PRODUCT_LIST_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                products: [],
            };
        default:
            return state;
    }
};
