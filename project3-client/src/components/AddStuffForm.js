import React from 'react'
import { Redirect } from 'react-router-dom'
import WebcamCapture from './Webcam'


function AddStuffForm(props) {

    //props.onAdd = function
    const [ webcamImage, setwebcamImage ] = React.useState(null)
    
    const handleWebcam = (img) => {
        setwebcamImage(img)
    }

    if (!props.loggedInUser) {
        return <Redirect to={'/sign-in'} />
    }
    
    
    

    return (
        <div>
            <form onSubmit={(e)=> props.onAddStuff(e, webcamImage)} style={{display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
                <h5 style={{color: '#d64e25'}}>Capture photo <span style={{color: '#255ed6'}}>OR</span> Choose file</h5>
                <WebcamCapture onAdd={handleWebcam}/>
                <input type="file" name="image"/>
                <label style={{marginBottom: '0px', marginTop: '3px'}} ><h4 style={{color: '#255ed6'}}>Category:</h4></label>
                <input name="categoryStuff" type="text" placeholder="parts/ accecories/ other"  style={{marginRight: '36px'}} ></input>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Name:</h4></label>
                <input name="nameStuff"  type="text" placeholder="Stuff name" style={{marginRight: '36px'}}></input>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Price:</h4></label>
                <input name="priceStuff" type="Number" placeholder="Euro €" style={{marginRight: '36px'}}/>
                <label style={{marginBottom: '0px', marginTop: '3px'}}><h4 style={{color: '#255ed6'}}>Phone:</h4></label>
                <input name="phoneStuff" type="number" placeholder="Enter phone number" style={{marginRight: '36px'}}/>
                <label style={{marginBottom: '0px'}}><h4 style={{color: '#255ed6'}}>City:</h4></label>
                <input name="cityStuff" type="text" placeholder="Enter city" style={{marginRight: '36px'}}/>
                <br></br>
                <button type="submit" style={{marginTop: '35px', width: '120px', marginRight: '35px', marginLeft: '83px', borderRadius: '20px', color: 'white', backgroundColor: '#255ed6'}}><h2>Submit</h2></button>
            </form>
        </div>
    )
}

export default AddStuffForm