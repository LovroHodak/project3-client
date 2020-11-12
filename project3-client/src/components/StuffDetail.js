import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 
import {API_URL} from '../config'



export default class StuffDetail extends Component {

    state ={
        stuff: {}
    }

    componentDidMount() {
        let stuffId = this.props.match.params.stuffId
        console.log(this.props)
         axios.get(`${API_URL}/stuffs/${stuffId}`, {withCredentials: true})
             .then((response) => {
                 this.setState({
                     stuff: response.data
                 })
             })
    }

    render() {

        const {categoryStuff, nameStuff, priceStuff, phoneStuff, cityStuff, image, _id, ownerId} = this.state.stuff

        const {loggedInUser} = this.props

        return (
            <div>
                <div>
                    <img src={image} alt={'stuff'} style={{width: '290px', borderRadius: '20px'}} /> 
                </div>
                <div style={{marginTop: '15px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}} >
                        <h2 style={{marginTop: '5px', color: '#255ed6'}}>{cityStuff}</h2>
                        <h2 style={{marginTop: '5px', marginRight: '35px', color: '#255ed6'}}>{priceStuff} €</h2>
                    </div>      
                    <h3 style={{marginTop: '5px'}}>Category: {categoryStuff}</h3>
                    <h3 style={{marginTop: '5px'}}>Name: {nameStuff}</h3>
                    <h2 style={{marginTop: '5px'}}>+386 {phoneStuff} </h2>
                    { 
                        loggedInUser && loggedInUser._id === ownerId ? (
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Link to={`/stuff/${_id}/edit`} >
                                    <button style={{marginTop: '15px', width: '120px', borderRadius: '20px'}}><h3>Edit</h3></button>
                                </Link>
                                <button onClick={() => { this.props.onDeleteStuff(_id) } }  style={{marginTop: '15px', width: '120px', marginRight: '35px',  borderRadius: '20px', color: 'white', backgroundColor: '#d64e25'}}>
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



