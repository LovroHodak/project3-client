import React, { Component } from 'react'
import axios from 'axios' 


export default class StuffDetail extends Component {

    state ={
        stuff: {}
    }

    componentDidMount() {
        let stuffId = this.props.match.params.stuffId
        console.log(this.props)
         axios.get(`http://localhost:5000/api/stuffs/${stuffId}`)
             .then((response) => {
                 this.setState({
                     stuff: response.data
                 })
             })
    }

    render() {

        const {categoryStuff, nameStuff, priceStuff, phoneStuff, cityStuff, image, _id} = this.state.stuff

        return (
            <div>
                <div>
                    <img src={image} alt={'stuff'} style={{width: '250px', border: '2px solid black'}} /> 
                </div>
                <div style={{marginTop: '15px'}}>       
                    <h3 style={{marginTop: '5px'}}>Category: {categoryStuff} €</h3>
                    <h3 style={{marginTop: '5px'}}>Name: {nameStuff}</h3>
                    <h3 style={{marginTop: '5px'}}>Price: {priceStuff}</h3>
                    <h3 style={{marginTop: '5px'}}>Phone: +386{phoneStuff} </h3>
                    
                    <h3 style={{marginTop: '5px'}}>City: {cityStuff}</h3>
                    <button onClick={() => { this.props.onDeleteStuff(_id) } } style={{marginTop: '15px', marginLeft: '90px'}}><h2>Delete</h2></button>
                </div> 
            </div>
        )
    }
}



