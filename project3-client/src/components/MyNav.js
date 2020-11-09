import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MyNav(props) {

    let buttonStyle = {marginLeft: '10px', color: '#3796b6'}
    
    
    return (
        <Navbar bg="light" expand="lg" >
            <Link to={`/`}><h1 style={{fontFamily: 'Bangers', marginTop: '10px'}} >CLICK'N'RIDE</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white', border: '0px', boxShadow: '0px 15px 45px'}} /> 
            
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto" style={{backgroundColor: '#f9f9f9'}}>
                    <Link to="/" style={{color: '#3796b6'}} ><h6>BIKES</h6></Link>
                    <Link style={buttonStyle} to="/sellBike">Sell a bike!</Link>
                    <Link to="/bikeStuff" style={{color: '#3796b6'}}><h6>BIKE STUFF</h6></Link>
                    <Link style={buttonStyle}  to="/sellStuffs">Sell stuffs!</Link>
                    
                    <Link to="/freeStuff" style={{color: '#3796b6'}}><h6>FOR FREE</h6></Link>
                    <Link style={buttonStyle} to="/giveAway">Give away</Link>
                    {
                            props.loggedInUser ? (
                                <div style={{marginLeft: '-10px'}} >
                                    <Link style={buttonStyle}  onClick={props.onLogout}><h6>Logout</h6></Link>
                                </div>
                            ) : (
                                <Nav style={{marginLeft: '-10px'}} >
                                    <Link style={buttonStyle}  to="/sign-in"><h6>Sign In</h6></Link>
                                    <Link style={buttonStyle}to="/sign-up"><h6>Sign Up</h6></Link>
                                </Nav>
                            )
                        }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
