import React from 'react'
import { Redirect } from 'react-router-dom'

function AddFreeForm(props) {

    //props.onAdd = function
        if (!props.loggedInUser) {
        return <Redirect to={'/sign-in'} />
    }
    

    return (
        <div>
        <h1>addFREEForm </h1>
            <form onSubmit={props.onAddFree} style={{display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
                <input type="file" name="image"  />
                <label>Name:</label>
                <input name="nameFree" type="text" placeholder="name of product"></input>
                <label>Phone:</label>
                <input name="phoneFree" type="number" placeholder="Enter phone number"/>
                <label>City:</label>
                <input name="cityFree" type="text" placeholder="Enter city"/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddFreeForm