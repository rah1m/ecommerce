import React, {Suspense} from 'react';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

import {ROUTES} from './consts';

/**
 * Add Routes
 */

export const routes: JSX.Element = (
    <Router>
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path={ROUTES.GLOBAL.HOME.PATH} exact>
                    Home
                </Route>
                <Redirect
                    exact
                    from={ROUTES.GLOBAL.PATH}
                    to={ROUTES.GLOBAL.HOME.PATH}
                />
                {/** Not Found Route */}
                <Route>
                    <div>Not found</div>
                </Route>
            </Switch>
        </Suspense>
    </Router>
);
