import React, {FC} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header: FC = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <NavLink className="navbar-brand" to="/">
                        ProShop
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="nav-link" to="/cart">
                                <i className="fas fa-shopping-cart mr-1"></i>
                                Cart
                            </NavLink>
                            {/* <Nav.Link href="/cart"></Nav.Link> */}
                            <NavLink className="nav-link" to="/login">
                                <i className="fas fa-user mr-1"></i>Sign In
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
