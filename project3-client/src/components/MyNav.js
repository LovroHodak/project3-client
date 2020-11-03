import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MyNav() {

    let buttonStyle = {marginLeft: '10px'}

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">Idk home?</Link>
                    <Link style={buttonStyle} to="/sign-up">Sign Up</Link>
                    <Link style={buttonStyle}  to="/sign-in">Sign In</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
