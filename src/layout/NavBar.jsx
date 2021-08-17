import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import Logo from '../assets/images/mainLogo.svg';
import GreenDot from '../assets/images/greenDot.svg';
import {Link, NavLink} from "react-router-dom";
import Classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className={Classes.navbarBorder}>
            <Container>
                <Link to="/" className={"navbar-brand"}>
                    <Image src={Logo} fluid/>
                </Link>

                <Nav className={`${Classes.tabNavResponsive} d-md-none`}>
                    <Link to="#link">
                        <Image src={GreenDot} fluid/> Ledger
                    </Link>
                </Nav>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={Classes.basicNav}>
                    <Nav className={Classes.tabNav}>
                        <NavLink exact={true} to="/" activeClassName={Classes.selected}>Transfer NFT</NavLink>
                        <NavLink to="/transfer-liquidity" activeClassName={Classes.selected}>Transfer Liquidity</NavLink>
                    </Nav>

                    <Nav className={`${Classes.linkTab} ml-auto`}>
                        <Link to="#home">Link 2</Link>
                        <Link to="#link">Link 1</Link>
                    </Nav>

                    <Nav className={`${Classes.tabNav} d-none d-md-block`}>
                        <Link to="#link">
                            <Image src={GreenDot} fluid/> Ledger
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
