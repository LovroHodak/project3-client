import React, { Component } from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'
import {API_URL} from '../config'



export default class BikeDetail extends Component {

    state ={
        bike: {}
    }

    componentDidMount() {
        let bikeId = this.props.match.params.bikeId
        console.log(this.props)
         axios.get(`${API_URL}/bikes/${bikeId}`, {withCredentials: true})
             .then((response) => {
                 this.setState({
                     bike: response.data
                 })
             })
    }

    render() {

        const {price, size, bikeType, image, phone, city, _id, ownerId} = this.state.bike
        const {loggedInUser} = this.props
        /*
        if (!loggedInUser){

        }
        */

        return (
            <div>
                <div style={{maxWidth: '360px'}} >
                    <img src={image} alt={'bike'} style={{width: '290px', borderRadius: '20px'}} /> 
                </div>
                <div style={{marginTop: '15px'}}>       
                    <div style={{display: 'flex', justifyContent: 'space-between'}} >
                        <h2 style={{marginTop: '5px', color: '#255ed6'}}>{city}</h2>
                        <h2 style={{marginTop: '5px', marginRight: '35px', color: '#255ed6'}}>{price} €</h2>
                    </div>
                    <h3 style={{marginTop: '5px'}}>Size: {size}</h3>
                    <h3 style={{marginTop: '5px'}}>Bike type: {bikeType} </h3>
                    <h2 style={{marginTop: '15px', color: '#255ed6'}}>+386 {phone}</h2>
                    { 
                        loggedInUser && loggedInUser._id === ownerId ? (
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Link to={`/bike/${_id}/edit`} >
                                    <button style={{marginTop: '15px', width: '120px', borderRadius: '20px'}}><h3>Edit</h3></button>
                                </Link>
                                <button onClick={() => { this.props.onDelete(_id) } }  style={{marginTop: '15px', width: '120px', marginRight: '35px', borderRadius: '20px', color: 'white', backgroundColor: '#d64e25'}}>
                                    <h3>Delete</h3>
                                </button>
                            </div>
                            ) : (<div></div>)
                    }
                    
                </div> 
            </div>
        )
    }
}



