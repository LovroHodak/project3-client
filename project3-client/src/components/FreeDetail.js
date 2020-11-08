import React, { Component } from 'react'
import axios from 'axios' 


export default class FreeDetail extends Component {

    state ={
        free: {}
    }

    componentDidMount() {
        let freeId = this.props.match.params.freeId
        console.log(this.props)
         axios.get(`http://localhost:5000/api/frees/${freeId}`)
             .then((response) => {
                 this.setState({
                     free: response.data
                 })
             })
    }

    render() {

        const {nameFree, phoneFree, cityFree, image, _id} = this.state.free

        return (
            <div>
                <div>
                    <img src={image} alt={'stuff'} style={{width: '250px', border: '2px solid black'}} /> 
                </div>
                <div style={{marginTop: '15px'}}>
                    <h3 style={{marginTop: '5px'}}>Name: {nameFree}</h3>
                    <h3 style={{marginTop: '5px'}}>Phone: +386{phoneFree} </h3>
                    
                    <h3 style={{marginTop: '5px'}}>City: {cityFree}</h3>
                    <button onClick={() => { this.props.onDeleteStuff(_id) } } style={{marginTop: '15px', marginLeft: '90px'}}><h2>Delete</h2></button>
                </div> 
            </div>
        )
    }
}
