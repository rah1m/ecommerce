import {Product} from '@src/@types/product.types';

import {ProductActionType} from '../action-types';

interface ProductActionRequest {
    type: ProductActionType.PRODUCT_REPOSITORIES_REQUEST;
}

interface ProductSuccessAction {
    type: ProductActionType.PRODUCT_REPOSITORIES_SUCCESS;
    payload: Product;
}

interface ProductErrorAction {
    type: ProductActionType.PRODUCT_REPOSITORIES_ERROR;
    payload: string;
}

export type ProductAction =
    | ProductActionRequest
    | ProductSuccessAction
    | ProductErrorAction;
