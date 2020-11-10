import React, { Component } from 'react'
import axios from 'axios' 


class EditForm extends Component {

    state ={
        bike: {}
    }

    componentDidMount() {
       let bikeId = this.props.match.params.bikeId
        axios.get(`http://localhost:5000/api/bikes/${bikeId}`)
            .then((response) => {
                this.setState({
                    bike: response.data
                })
            })
    }

    handlePriceChange = (e) => {
       let cloneBike = JSON.parse(JSON.stringify(this.state.bike))
       cloneBike.price =  e.target.value
       this.setState({
           bike: cloneBike
       })
    }

    handleSizeChange = (e) => {
        let cloneBike = JSON.parse(JSON.stringify(this.state.bike))
        cloneBike.size =  e.target.value
        this.setState({
            bike: cloneBike
        })
    }

    handleBikeTypeChange = (e) => {
        let cloneBike = JSON.parse(JSON.stringify(this.state.bike))
        cloneBike.bikeType =  e.target.value
        this.setState({
            bike: cloneBike
        })
    }
 
    handlePhoneChange = (e) => {
         let cloneBike = JSON.parse(JSON.stringify(this.state.bike))
         cloneBike.phone =  e.target.value
         this.setState({
             bike: cloneBike
         })
    }

    handleCityChange = (e) => {
        let cloneBike = JSON.parse(JSON.stringify(this.state.bike))
        cloneBike.city =  e.target.value
        this.setState({
            bike: cloneBike
        })
    }


    render() {
        const {price, size, bikeType, phone, city, image} = this.state.bike

        return (
            <div>
                <img src={image} alt={'bike'} style={{width: '290px', borderRadius: '20px'}} />
                <h3 style={{marginTop: '5px'}}>Price: <input onChange={this.handlePriceChange} type="number" value={price} style={{width: '190px'}}></input> €</h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>City: {city}</h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>Size: {size}</h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>Bike type: {bikeType} </h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>Phone: +386 {phone}</h3>
                <button onClick={() => { this.props.onEdit(this.state.bike) }  }  style={{marginTop: '15px', width: '120px', borderRadius: '20px'}}><h3>Edit</h3></button>
                
            </div>
        )
    }
}

export default EditForm