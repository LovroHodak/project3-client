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
        const {price, size, bikeType, phone, city} = this.state.bike

        return (
            <div>
                <input onChange={this.handlePriceChange} type="number" value={price} ></input>
                <input  onChange={this.handleSizeChange} type="text" value={size} ></input>
                <input onChange={this.handleBikeTypeChange} type="text" value={bikeType} ></input>
                <input  onChange={this.handlePhoneChange} type="number" value={phone} ></input>
                <input onChange={this.handleCityChange} type="text" value={city} ></input>
                <button onClick={() => { this.props.onEdit(this.state.bike) }  } >Edit</button>
            </div>
        )
    }
}

export default EditForm