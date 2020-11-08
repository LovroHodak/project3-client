import React from 'react'
import {Link} from 'react-router-dom'

function BikeList(props) {

    return (
        <div>
           <nav style={{display: 'flex'}}>
               <h3 style={{marginRight: '5px', marginTop: '4px'}}>Sort : </h3> 
               <button style={{borderRadius: '20px', height: '35px', backgroundColor: '#abc4ff', border: '0px', marginTop: '7px'}}><Link to="/bikeSortPriceDown"><p style={{marginTop: '7px', marginLeft: '5px', marginRight: '5px', fontSize: '12px', color: 'black', fontFamily: 'helvetica'}} >PRICE DOWN</p></Link></button>
             
               
           </nav>
           {
               props.bikes.map((bike) => {
                    return(
                        <Link to={`/bike/${bike._id}`}>
                            <div style={{display: 'flex'}} >
                                <div key={bike._id} style={{display: 'flex',  width: '100%', marginRight: '30px', marginTop: '10px', backgroundColor: '#ccdbfd', borderRadius: '7px'}} >
                                    <img src={bike.image} alt={bike} style={{width: '130px', height: '80px', margin: '2px', borderRadius: '7px'}}/>
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


export default BikeList