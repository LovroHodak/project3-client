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



function FreeList(props) {

  // props.todos = [{}, {}, {}]
  // const promise = loadStripe("pk_test_51HJ0c0BfOEj3QZ8feuSBtbYIRg1Jz8vYESZmvp1SweikDC6I0M4OkpHmZjwj2A7qXVayZr5fS07Sz9mBZZb1O0fA00GrlcvlMN");

  return (
    <div>
       <h1>Free Stuff  </h1>
          {
            props.frees.map((free) => {
              return(
                <Link to={`/free/${free._id}`}>
                    <div style={{display: 'flex'}} >
                      <div key={free._id} style={{display: 'flex', border: '2px solid black', width: '100%', marginRight: '30px', marginTop: '5px'}} >
                        <img src={free.image} alt={'stuff'} style={{width: '130px', height: '80px', margin: '2px'}}/>
                        <div style={{marginLeft: '5px'}} >
                          <p>Name: {free.nameFree}</p>
                          <p>City: {free.cityFree}</p>
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


export default FreeList