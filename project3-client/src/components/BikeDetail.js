import React, { Component } from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'



export default class BikeDetail extends Component {

    state ={
        bike: {}
    }

    componentDidMount() {
        let bikeId = this.props.match.params.bikeId
        console.log(this.props)
         axios.get(`http://localhost:5000/api/bikes/${bikeId}`)
             .then((response) => {
                 this.setState({
                     bike: response.data
                 })
             })
    }

    render() {

        const {price, size, bikeType, image, phone, city, _id} = this.state.bike

        return (
            <div>
                <div>
                    <img src={image} alt={'bike'} style={{width: '250px', border: '2px solid black'}} /> 
                </div>
                <div style={{marginTop: '15px'}}>       
                    <h3 style={{marginTop: '5px'}}>Price: {price} €</h3>
                    <h3 style={{marginTop: '5px'}}>City: {city}</h3>
                    <h3 style={{marginTop: '5px'}}>Size: {size}</h3>
                    <h3 style={{marginTop: '5px'}}>Bike type: {bikeType} </h3>
                    
                    <h3 style={{marginTop: '5px'}}>Phone: +386 {phone}</h3>
                    <Link to={`/bike/${_id}/edit`} ><button>Edit</button></Link>
                    <button onClick={() => { this.props.onDelete(_id) } } style={{marginTop: '15px', marginLeft: '90px'}}><h2>Delete</h2></button>
                </div> 
            </div>
        )
    }
}



