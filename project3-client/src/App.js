import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/MyNav'
import axios from 'axios'
import BikeList from './components/BikeList'
import AddBikeForm from './components/AddBikeForm'
import {withRouter} from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch';
import {Route} from 'react-router-dom'
import BikeDetail from './components/BikeDetail'
import EditForm from './components/EditForm'
import StuffList from './components/StuffList'
import AddStuffForm from './components/AddStuffForm'
import StuffDetail from './components/StuffDetail'
import FreeList from './components/FreeList'
import AddFreeForm from './components/AddFreeForm'
import FreeDetail from './components/FreeDetail'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import BikeSortPriceDown from './components/BikeSortPriceDown'
import BikeSortPriceUp from './components/BikeSortPriceUp'






class App extends Component {

  state = {
    bikes: [],
    stuffs: [],
    frees: [],
    loggedInUser: null,
    errorMessage: null,
    bikeSortPriceDown: [],
    bikeSortPriceUp: []
  }

  componentDidMount() {
    if (!this.state.loggedInUser) {
      axios.get(`http://localhost:5000/api/user`, {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
    }


    axios.get(`http://localhost:5000/api/bikes`)
    .then((response) => {
      let sortedDown = JSON.parse(JSON.stringify(response.data))
      let sortedUp = JSON.parse(JSON.stringify(response.data))
      this.setState({
        bikes: response.data.sort((a, b) => {
          if(a.city < b.city){
            return -1
          } else if (a.city > b.city){
            return 1
          } else {
            return 0
          }
        }),
        bikeSortPriceDown: sortedDown.sort((a, b) => {return a.price - b.price}),
        bikeSortPriceUp: sortedUp.sort((a, b) => {return b.price - a.price})
      })
    })

    axios.get(`http://localhost:5000/api/stuffs`)
    .then((response) => {
      this.setState({
        stuffs: response.data
      })
    })

    axios.get(`http://localhost:5000/api/frees`)
    .then((response) => {
      this.setState({
        frees: response.data
      })
    })
  }



  handleAdd = (e) => {
    e.preventDefault()
    const {price, size, bikeType, image, phone, city} = e.target
    
    let imageFile = image.files[0]

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageFile)
    

    axios.post(`http://localhost:5000/api/upload`, uploadForm)
      .then((response) => {
        let newBike = {
          price: price.value,
          size: size.value,
          bikeType: bikeType.value,
          image: response.data.image,
          phone: phone.value,
          city: city.value
        }
        axios.post(`http://localhost:5000/api/create`, newBike)
        .then((response) => {
          this.setState({
            bikes: [ response.data , ...this.state.bikes]
          }, () => {
            this.props.history.push('/')
          })
        })

      })


  }

  uploadPassImage= e => {
    const files = Array.of(this.state.passImage)
    
    
        const formData = new FormData()
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
          fetch(`http://localhost:3030/imageUploadPassImage`, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(images => {
            this.setState({passImage: images[0].url}) 
    //sets the data in the state for uploading into SQL database later
          })
        }

  handleAddStuff = (e) => {
    e.preventDefault()
    const {categoryStuff, nameStuff, priceStuff, phoneStuff, cityStuff, image} = e.target
    
    let imageFile = image.files[0]

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageFile)
    

    axios.post(`http://localhost:5000/api/upload`, uploadForm)
      .then((response) => {
        let newStuff = {
          categoryStuff: categoryStuff.value,
          nameStuff: nameStuff.value,
          priceStuff: priceStuff.value,
          phoneStuff: phoneStuff.value,
          cityStuff: cityStuff.value,
          image: response.data.image

        }
        axios.post(`http://localhost:5000/api/createS`, newStuff)
        .then((response) => {
          this.setState({
            stuffs: [ response.data , ...this.state.stuffs]
          }, () => {
            this.props.history.push('/bikeStuff')
          })
        })

      })


  }

  handleAddFree = (e) => {
    e.preventDefault()
    const {nameFree, phoneFree, cityFree, image} = e.target
    
    let imageFile = image.files[0]

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageFile)
    

    axios.post(`http://localhost:5000/api/upload`, uploadForm)
      .then((response) => {
        let newFree = {
          nameFree: nameFree.value,
          phoneFree: phoneFree.value,
          cityFree: cityFree.value,
          image: response.data.image

        }
        axios.post(`http://localhost:5000/api/createF`, newFree)
        .then((response) => {
          this.setState({
            frees: [ response.data , ...this.state.frees]
          }, () => {
            this.props.history.push('/freeStuff')
          })
        })

      })


  }

  handleDelete = (bikeId) => {
    axios.delete(`http://localhost:5000/api/bikes/${bikeId}`)
      .then(() => {
          let filteredBikes = this.state.bikes.filter((bike) => {
              return bike._id !== bikeId
          })

          this.setState({
            bikes: filteredBikes
          }, () => {
            this.props.history.push('/')
          })
      })

  }

  handleDeleteStuff = (stuffId) => {
    axios.delete(`http://localhost:5000/api/stuffs/${stuffId}`)
      .then(() => {
          let filteredStuffs = this.state.stuffs.filter((stuff) => {
              return stuff._id !== stuffId
          })

          this.setState({
            stuffs: filteredStuffs
          }, () => {
            this.props.history.push('/bikeStuff')
          })
      })

  }

  handleDeleteFree = (freeId) => {
    axios.delete(`http://localhost:5000/api/frees/${freeId}`)
      .then(() => {
          let filteredFrees = this.state.frees.filter((free) => {
              return free._id !== freeId
          })

          this.setState({
            frees: filteredFrees
          }, () => {
            this.props.history.push('/freeStuff')
          })
      })

  }

  handleEdit = (bike) => {
    axios.patch(`http://localhost:5000/api/bikes/${bike._id}`, {
      price: bike.price,
      size: bike.size,
      bikeType: bike.bikeType,
      phone: bike.phone,
      city: bike.city
    })
    .then(() => {
        let updatedBikes = this.state.bikes.map((myBike) => {
          if (myBike._id === bike._id) {
            myBike = bike
          }
          return myBike
        })

        this.setState({
          bikes: updatedBikes
        }, () => {
          this.props.history.push('/')
        })
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    const {username, email, password} = e.target

    axios.post(`http://localhost:5000/api/signup` , {
      username: username.value, 
      email: email.value, 
      password: password.value
    }, {withCredentials: true})
    .then((response) => {
      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push('/')
      })
    })


  }


  handleSignIn = (e) => {
    e.preventDefault()
    e.preventDefault()
    const {email, password} = e.target

    axios.post(`http://localhost:5000/api/signin` , {
      email: email.value, 
      password: password.value
    }, {withCredentials: true})
      .then((response) => {
        this.setState({
          loggedInUser: response.data
        }, () => {
          this.props.history.push('/')
        })
      })
      .catch((error) => {
          this.setState({
            errorMessage: error.response.data.error
          })
      })
  }

  handleLogOut = (e) => {
    axios.post(`http://localhost:5000/api/logout`, {}, {withCredentials: true})
      .then(() => {
          this.setState({
            loggedInUser: null
          })
      })
  }

  handleUnMount = () => {
    this.setState({
      errorMessage: null
    })
  }



  render() {
    const {loggedInUser, errorMessage} = this.state
    

    return (
      <div style={{overflow: 'carousel', marginBottom: '20px', backgroundColor: 'f9f9f9'}}>
        
        <Nav loggedInUser={loggedInUser} onLogout={this.handleLogOut} />
        {
          loggedInUser ? (<h5 style={{color: '#255ed6'}} >Hey there, {loggedInUser.username}!</h5>) : null
        }

        <Switch>
          <Route exact path='/' render={() => {
            return <BikeList bikes={this.state.bikes} />
          }} />
          <Route path='/sellBike' render={() => {
            return <AddBikeForm loggedInUser={loggedInUser} onAdd={this.handleAdd} onUpload={this.uploadPassImage} />
          }} />
          <Route exact path='/bike/:bikeId'  render={(routeProps) => {
            return <BikeDetail onDelete={this.handleDelete} loggedInUser={loggedInUser} {...routeProps}/>
          }} />
          <Route path="/bike/:bikeId/edit" render={(routeProps) => {
              return <EditForm loggedInUser={loggedInUser} onEdit={this.handleEdit} {...routeProps} />
            }} />

          <Route exact path='/bikeStuff' render={() => {
            return <StuffList stuffs={this.state.stuffs} />
          }} />
          <Route path='/sellStuffs' render={() => {
            return <AddStuffForm loggedInUser={loggedInUser} onAddStuff={this.handleAddStuff} />
          }} />
          <Route path='/stuff/:stuffId' render={(routeProps) => {
            return <StuffDetail loggedInUser={loggedInUser} onDeleteStuff={this.handleDeleteStuff} {...routeProps}/>
          }} />

          <Route exact path='/freeStuff' render={() => {
            return <FreeList frees={this.state.frees} />
          }} />
          <Route path='/giveAway' render={() => {
            return <AddFreeForm loggedInUser={loggedInUser}  onAddFree={this.handleAddFree} />
          }} />
          <Route path='/free/:freeId' render={(routeProps) => {
            return <FreeDetail loggedInUser={loggedInUser} onDeleteFree={this.handleDeleteFree} {...routeProps}/>
          }} />
          
          <Route path="/sign-in" render={(routeProps) => {
            return <SignIn onUnmount={this.handleUnMount}  errorMessage={errorMessage}   onSignIn={this.handleSignIn} {...routeProps} />
          }}/>
          <Route path="/sign-up" render={(routeProps) => {
            return <SignUp onSignUp={this.handleSignUp} {...routeProps} />
          }}/>

          <Route exact path='/bikeSortPriceDown' render={() => {
            return <BikeSortPriceDown bikeSortPriceDown={this.state.bikeSortPriceDown} />
          }} />
          <Route exact path='/bikeSortPriceUp' render={() => {
            return <BikeSortPriceUp bikeSortPriceUp={this.state.bikeSortPriceUp} />
          }} />
         

          

            
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)