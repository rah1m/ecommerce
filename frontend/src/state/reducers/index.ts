import {combineReducers} from 'redux';

import {productListReducer} from './productListReducers';
import {productReducer} from './productReducer';

const reducers = combineReducers({
    productList: productListReducer,
    product: productReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
