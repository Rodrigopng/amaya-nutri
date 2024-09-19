import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import {Link} from "react-router-dom";

interface HeaderProps {
    backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
    return (
        <Navbar style={{ backgroundColor, transition: 'background-color 0.5s' }} variant="dark">
            <Navbar.Brand href="#home">
                <img src={"logo192.png"} width={"25"} height={"25"}  alt={"Logo"}/>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">Conóceme</Nav.Link>
                <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
                <Nav.Link as={Link} to="/pricing">Tarifas</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
