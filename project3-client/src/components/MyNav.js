import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MyNav() {

    let buttonStyle = {marginLeft: '10px'}

    return (
        <Navbar bg="light" expand="lg">
            <Link to={`/`}><h1>Click'n'Ride</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: '#abc4ff', border: '0px'}} /> 
            
            <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: 'yellow'}}>
                <Nav className="mr-auto">
                    <Link to="/">Bikes</Link>
                    <Link style={buttonStyle} to="/sellBike">Sell a bike!</Link>
                    <Link to="/bikeStuff">Bike Stuff</Link>
                    <Link style={buttonStyle}  to="/sellStuffs">Sell stuffs!</Link>
                    <Link to="/freeStuff">For free</Link>
                    <Link style={buttonStyle} to="/giveAway">Give away</Link>
                    <Link to="/sign-up">Sign Up</Link>
                    <Link to="/sign-in">Sign In</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
