import React from 'react'
import WebcamCapture from './Webcam'
import { Redirect } from 'react-router-dom'

function AddBikeForm(props) {

    //props.onAdd = function
    if (!props.loggedInUser) {
        return <Redirect to={'/sign-in'} />
    }
    

    return (
        <div>
            <form onSubmit={props.onAdd} style={{display: 'flex', flexDirection: 'column', marginRight: '30px'}}>
                <WebcamCapture />
                <input type="file" name="image"  />
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Price:</h4></label>
                <input name="price" type="number" placeholder="Euro €"></input>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Size:</h4></label>
                <input name="size"  type="text" placeholder="small / medium / large"></input>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Type:</h4></label>
                <input name="bikeType" type="text" placeholder="city / trek / mountain"/>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Phone:</h4></label>
                <input name="phone" type="number" placeholder="Enter phone number"/>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>City:</h4></label>
                <input name="city" type="text" placeholder="Enter city"/>
                <br></br>
                <button type="submit" style={{marginTop: '35px', width: '120px', marginRight: '35px', marginLeft: '83px', borderRadius: '20px', color: 'white', backgroundColor: '#255ed6'}}><h2>Submit</h2></button>
            </form>
        </div>
    )
}

export default AddBikeForm