import React, {Suspense, lazy} from 'react';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

import {ROUTES} from './consts';

const HomePage = lazy(() => import('@src/pages/Home'));
const ProductPage = lazy(() => import('@src/pages/ProductPage'));

/**
 * Add Routes
 */

export const routes: JSX.Element = (
    <Suspense fallback={<div>loading...</div>}>
        <Switch>
            <Route path={ROUTES.GLOBAL.HOME.PATH} exact component={HomePage} />
            <Route
                path={ROUTES.GLOBAL.PRODUCT.PATH}
                component={ProductPage}
                exact
            />
            <Route path={ROUTES.GLOBAL.LOGIN.PATH}>LOGN</Route>
            <Redirect
                exact
                from={ROUTES.GLOBAL.PATH}
                to={ROUTES.GLOBAL.HOME.PATH}
            />
            <Route>
                <div>Not found</div>
            </Route>
        </Switch>
    </Suspense>
);
