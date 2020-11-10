import React from 'react'
import {Link} from 'react-router-dom'

function StuffSortPriceDown(props) {

    return (
        <div>
           <nav style={{display: 'flex', backgroundColor: '#f9f9f9', justifyContent: 'space-around'}}>
                <Link to="/bikeStuff">
                    <button style={{marginTop: '10px', width: '120px', borderRadius: '20px', color: '#255ed6', border: '2px solid #255ed6'}}>
                        <h6 style={{marginTop: '3px'}}>City</h6>
                    </button>
                </Link>

                <Link to="/stuffSortPriceUp">
                    <button style={{marginTop: '10px', width: '120px', borderRadius: '20px', marginRight: '30px', color: '#255ed6', border: '2px solid #255ed6'}}>
                        <h6 style={{marginTop: '3px'}}>Price up</h6>
                    </button>
                </Link>
             
               
           </nav>
           
           {
               props.stuffSortPriceDown.map((stuff, i) => {
                    return(
                        <Link to={`/stuff/${stuff._id}`} key={stuff._id}>
                            <div style={{display: 'flex', backgroundColor: '#f9f9f9'}} >
                                <div style={{display: 'flex',  width: '100%', marginRight: '30px', marginTop: '10px', backgroundColor: '#ccdbfd', borderRadius: '7px'}} >
                                    <img src={stuff.image} alt={'stuff'} style={{width: '130px', height: '80px', margin: '2px', borderRadius: '7px'}}/>
                                    <div style={{marginLeft: '7px', marginBottom: '0px'}} >
                                        <h5 style={{marginTop: '5px'}}> {stuff.priceStuff} €</h5>
                                        <p>{stuff.cityStuff}</p>
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


export default StuffSortPriceDown