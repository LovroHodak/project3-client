import React, { Component } from 'react'
import axios from 'axios' 
import {API_URL} from '../config'


class EditFormStuff extends Component {

    state ={
        stuff: {}
    }

    componentDidMount() {
       let stuffId = this.props.match.params.stuffId
        axios.get(`${API_URL}/stuffs/${stuffId}`, {withCredentials: true})
            .then((response) => {
                this.setState({
                    stuff: response.data
                })
            })
    }

    handlePriceChangeStuff = (e) => {
       let cloneStuff = JSON.parse(JSON.stringify(this.state.stuff))
       cloneStuff.priceStuff =  e.target.value
       this.setState({
           stuff: cloneStuff
       })
    }

    

    render() {
        const {categoryStuff, priceStuff, nameStuff, phoneStuff, cityStuff, image} = this.state.stuff

        return (
            <div>
                <img src={image} alt={'stuff'} style={{width: '290px', borderRadius: '20px'}} />
                <h3 style={{marginTop: '5px'}}>Price: <input onChange={this.handlePriceChangeStuff} type="number" value={priceStuff} style={{width: '190px'}}></input> €</h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>City: {cityStuff}</h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>Category: {categoryStuff}</h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>Name: {nameStuff} </h3>
                <h3 style={{marginTop: '5px', color: '#255ed6'}}>Phone: +386 {phoneStuff}</h3>
                <button onClick={() => { this.props.onEditStuff(this.state.stuff) }  }  style={{marginTop: '15px', width: '120px', borderRadius: '20px'}}><h3>Edit</h3></button>
                
            </div>
        )
    }
}

export default EditFormStuff