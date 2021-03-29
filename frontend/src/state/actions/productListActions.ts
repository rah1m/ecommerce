import {Product} from '@src/@types/product.types';

import {ProductListActionType} from '../action-types';

interface ProductListAction {
    type: ProductListActionType.PRODUCT_LIST_REPOSITORIES;
}

interface ProductListSuccessAction {
    type: ProductListActionType.PRODUCT_LIST_REPOSITORIES_SUCCESS;
    payload: Product[];
}

interface ProductListErrorAction {
    type: ProductListActionType.PRODUCT_LIST_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =
    | ProductListAction
    | ProductListSuccessAction
    | ProductListErrorAction;
