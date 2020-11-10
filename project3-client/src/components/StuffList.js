import React from 'react'
import {Link} from 'react-router-dom'
import {} from 'react-bootstrap'

// import MyChatBot from './MyChatBot'
// import MyMap from './MyMap'
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
//make sure you check your paths correctly
//import "../App.css";



function StuffList(props) {

  // props.todos = [{}, {}, {}]
  // const promise = loadStripe("pk_test_51HJ0c0BfOEj3QZ8feuSBtbYIRg1Jz8vYESZmvp1SweikDC6I0M4OkpHmZjwj2A7qXVayZr5fS07Sz9mBZZb1O0fA00GrlcvlMN");

  return (
    <div>
        <nav style={{display: 'flex', backgroundColor: '#f9f9f9', justifyContent: 'space-around'}}>
                <Link to="/stuffSortPriceDown">
                    <button style={{marginTop: '10px', width: '120px', borderRadius: '20px', color: '#255ed6', border: '2px solid #255ed6'}}>
                        <h6 style={{marginTop: '3px'}}>Price down</h6>
                    </button>
                </Link>

                <Link to="/stuffSortPriceUp">
                    <button style={{marginTop: '10px', width: '120px', borderRadius: '20px', marginRight: '30px', color: '#255ed6', border: '2px solid #255ed6'}}>
                        <h6 style={{marginTop: '3px'}}>Price up</h6>
                    </button>
                </Link>
             
               
           </nav>
          {
            props.stuffs.map((stuff, i) => {
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


export default StuffList