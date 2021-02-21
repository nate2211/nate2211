import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"
import {Link} from "react-router-dom";
import {fbContext} from "../../Firebase";
export default function NavSite({user}) {
    const fb = useContext(fbContext)
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to={'/'}>Berzerk-Music</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/posts'}>Posts</NavDropdown.Item>
                        <NavDropdown.Item href="/explore">Explore</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {user ? <NavDropdown.Item href="sign-out">Sign-Out</NavDropdown.Item>:
                        <NavDropdown.Item href="sign-in" >Sign-In</NavDropdown.Item>}
                    </NavDropdown>
                    <Nav.Link as={Link} to={'/piano-scales'}>Piano Scales</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {user ? <Image src={user.photoURL} roundedCircle alt='user-avtr'/>:<div/>}
        </Navbar>
    )
}
