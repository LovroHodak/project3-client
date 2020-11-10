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

        const {loggedInUser} = this.props

        return (
            <div>
                <div>
                    <img src={image} alt={'stuff'} style={{width: '290px', borderRadius: '20px'}} /> 
                </div>
                <div style={{marginTop: '15px'}}>
                    <h2 style={{marginTop: '10px', color: '#255ed6'}}>{cityFree}</h2>

                    <h3 style={{marginTop: '10px'}}>Name: {nameFree}</h3>
                    <h3 style={{marginTop: '10px'}}>+386 {phoneFree} </h3>
                    {
                        loggedInUser ? (
                            <button onClick={() => { this.props.onDeleteFree(_id) } } style={{marginTop: '35px', width: '120px', marginRight: '35px', marginLeft: '83px', borderRadius: '20px', color: 'white', backgroundColor: '#d64e25'}}><h2>Delete</h2></button>
                        ) : (
                            <div></div>
                        )
                    }
                    

                </div> 
            </div>
        )
    }
}
