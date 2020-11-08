import React from 'react'
import WebcamCapture from './Webcam'

function AddBikeForm(props) {

    //props.onAdd = function

    

    return (
        <div>
        <h1>ADDbikeForm </h1>
            <form onSubmit={props.onAdd} style={{display: 'flex', flexDirection: 'column', marginRight: '30px'}}>
                <WebcamCapture />
                <input type="file" name="image"  />
                <label>Price:</label>
                <input name="price" type="number" placeholder="Euro €"></input>
                <label>Size:</label>
                <input name="size"  type="text" placeholder="small / medium / large"></input>
                <label>Type:</label>
                <input name="bikeType" type="text" placeholder="city / trek / mountain"/>
                <label>Phone:</label>
                <input name="phone" type="number" placeholder="Enter phone number"/>
                <label>City:</label>
                <input name="city" type="text" placeholder="Enter city"/>
                <br></br>
                <button type="submit" style={{marginBottom: '20px'}}>Submit</button>
            </form>
        </div>
    )
}

export default AddBikeForm