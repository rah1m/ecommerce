import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators} from '../state';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
};
