import React, {FC} from 'react';

import Layout from './layout';
import {routes} from './routes';

const App: FC = () => {
    return <Layout>{routes}</Layout>;
};

export default App;
