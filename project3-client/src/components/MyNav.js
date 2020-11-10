import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MyNav(props) {

    //let buttonStyle = {marginLeft: '10px', color: '#3796b6'}
    
    
    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Link to={`/`}><h1 style={{fontFamily: 'Bangers', marginTop: '10px', marginRight: '5px'}} >CLICK'N'RIDE</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white', border: '0px', boxShadow: '0px 15px 45px'}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto d-block" style={{backgroundColor: '#f9f9f9'}}>
                        <Nav.Item>
                            <Nav.Link eventKey="1" as={Link} to="/" style={{color: '#3796b6', padding: '0px'}}>
                            <h6>BIKES</h6>
                            </Nav.Link>
                        </Nav.Item>
                        {
                            props.loggedInUser ? (
                                <Nav.Item>
                                    <Nav.Link eventKey="2" as={Link} to="/sellBike" style={{color: '#3796b6', marginLeft: '10px', padding: '0px'}}>
                                        <h6>Sell bike</h6>
                                    </Nav.Link>
                                </Nav.Item>
                            ) : (
                                <div></div>
                            )
                        }
                        <Nav.Item>
                            <Nav.Link eventKey="3" as={Link} to="/bikeStuff" style={{color: '#3796b6', padding: '0px'}}>
                                <h6>BIKE STUFF</h6>
                            </Nav.Link>
                        </Nav.Item>
                        {
                            props.loggedInUser ? (
                                <Nav.Item>
                                    <Nav.Link eventKey="4" as={Link} to="/sellStuffs" style={{color: '#3796b6', marginLeft: '10px', padding: '0px'}}>
                                        <h6>Sell stuff</h6>
                                    </Nav.Link>
                            	</Nav.Item>
                            ) : (
                                <div></div>
                            )
                        }
                        <Nav.Item>
                            <Nav.Link eventKey="5" as={Link} to="/freeStuff" style={{color: '#3796b6', padding: '0px'}}>
                            <h6>FOR FREE</h6>
                            </Nav.Link>
                        </Nav.Item>
                        {
                            props.loggedInUser ? (
                                <>
                                    <Nav.Item>
                                        <Nav.Link eventKey="6" as={Link} to="/giveAway" style={{color: '#3796b6', marginLeft: '10px', padding: '0px'}}>
                                            <h6>Give away</h6>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="7" as={Link} onClick={props.onLogout} style={{color: '#3796b6', padding: '0px'}}>
                                            <h6>LOGOUT</h6>
                                        </Nav.Link>
                                    </Nav.Item>
                                </>
                            ) : (
                                <>
                                    <Nav.Item>
                                        <Nav.Link eventKey="8" as={Link} to="/sign-in" style={{color: '#3796b6', marginLeft: '10px', padding: '0px'}}>
                                            <h6>SIGN IN</h6>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="9" as={Link} to="/sign-up" style={{color: '#3796b6', marginLeft: '10px', padding: '0px'}}>
                                            <h6>SIGN UP</h6>
                                        </Nav.Link>
                                    </Nav.Item>
                                </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
