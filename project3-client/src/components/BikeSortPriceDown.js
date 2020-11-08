import React from 'react'
import {Link} from 'react-router-dom'

function BikeSortPriceDown(props) {

    return (
        <div>
           
           {
               props.bikeSortPriceDown.map((bike) => {
                    return(
                        <Link to={`/bike/${bike._id}`}>
                            <div style={{display: 'flex'}} >
                                <div key={bike._id} style={{display: 'flex', border: '2px solid black', width: '100%', marginRight: '30px', marginTop: '5px'}} >
                                    <img src={bike.image} alt={bike} style={{width: '130px', height: '80px', margin: '2px'}}/>
                                    <div style={{marginLeft: '5px'}} >
                                        <p>Price: {bike.price} €</p>
                                        <p>City: {bike.city}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        ) 
                        
               })
           }
        </div>
    )
}


export default BikeSortPriceDown