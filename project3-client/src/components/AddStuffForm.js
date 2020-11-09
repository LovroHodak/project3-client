import React from 'react'
import { Redirect } from 'react-router-dom'

function AddStuffForm(props) {

    //props.onAdd = function
    if (!props.loggedInUser) {
        return <Redirect to={'/sign-in'} />
    }
    
    

    return (
        <div>
        <h1>addStuffForm </h1>
            <form onSubmit={props.onAddStuff} style={{display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
                <input type="file" name="image"  />
                <label>Category:</label>
                <input name="categoryStuff" type="text" placeholder="parts/ accecories/ other"></input>
                <label>Name:</label>
                <input name="nameStuff"  type="text" placeholder="Stuff name"></input>
                <label>Price:</label>
                <input name="priceStuff" type="Number" placeholder="Euro €"/>
                <label>Phone:</label>
                <input name="phoneStuff" type="number" placeholder="Enter phone number"/>
                <label>City:</label>
                <input name="cityStuff" type="text" placeholder="Enter city"/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddStuffForm