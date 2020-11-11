import React, {useEffect} from 'react';

export default function SignUp(props){

    useEffect(() => {
        //didMount
        return props.onUnmount
    }, [])

     
    //componentDidMount
    useEffect(() => {
      
     }, [])

    //componentDidUpdate
    useEffect(() => {
        
     })

    return (
        <form onSubmit={props.onSignUp}>
            <div className="form-group" style={{marginRight: '36px'}}>
                <label htmlFor="exampleInputUsername"><h4 style={{color: '#255ed6'}}>Username</h4></label>
                <input onChange={props.onUnmount} type="text" className="form-control" id="exampleInputUsername" name="username" />
            </div>
            <div className="form-group" style={{marginRight: '36px'}}>
                <label htmlFor="exampleInputEmail1"><h4 style={{color: '#255ed6'}}>Email address</h4></label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group" style={{marginRight: '36px'}}>
                <label htmlFor="exampleInputPassword1"><h4 style={{color: '#255ed6'}}>Password</h4></label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" style={{marginTop: '15px', width: '120px', marginRight: '35px', borderRadius: '20px', color: 'white', backgroundColor: '#255ed6'}}><h3>Submit</h3></button>
            {
                props.errorMessage ? (
                    <p style={{color:'red'}} >{props.errorMessage}</p>
                ) : null
            }
        </form>
    )
}