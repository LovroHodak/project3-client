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
       <h1>STUFFS for sale  </h1>
          {
            props.stuffs.map((stuff) => {
              return(
                  <Link to={`/stuff/${stuff._id}`}>
                    <div style={{display: 'flex'}} >
                      <div key={stuff._id} style={{display: 'flex', border: '2px solid black', width: '100%', marginRight: '30px', marginTop: '5px'}} >
                        <img src={stuff.image} alt={'stuff'} style={{width: '130px', height: '80px', margin: '2px'}}/>
                        <div style={{marginLeft: '5px'}} >
                          <p>Price: {stuff.priceStuff} €</p>
                          <p>City: {stuff.cityStuff}</p>
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