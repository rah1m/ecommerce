import React, {FC, ReactNode, ReactNodeArray} from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from '@src/components/Header';

interface IProps {
    children?: ReactNode | ReactNodeArray;
}

const Layout: FC<IProps> = ({children}) => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>{children}</Container>
            </main>
        </Router>
    );
};

export default Layout;
