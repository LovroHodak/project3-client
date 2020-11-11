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
import EditFormStuff from './components/EditFormStuff'
import FreeList from './components/FreeList'
import AddFreeForm from './components/AddFreeForm'
import FreeDetail from './components/FreeDetail'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import BikeSortPriceDown from './components/BikeSortPriceDown'
import BikeSortPriceUp from './components/BikeSortPriceUp'
import StuffSortPriceDown from './components/StuffSortPriceDown'
import StuffSortPriceUp from './components/StuffSortPriceUp'
import {API_URL} from './config'






class App extends Component {

  state = {
    bikes: [],
    stuffs: [],
    frees: [],
    loggedInUser: null,
    errorMessage: null,
    bikeSortPriceDown: [],
    bikeSortPriceUp: [],
    stuffSortPriceDown: [],
    stuffSortPriceUp: [],
    passImage: []
  }

  componentDidMount() {
    if (!this.state.loggedInUser) {
      axios.get(`${API_URL}/user`, {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
    }


    axios.get(`${API_URL}/bikes`, {withCredentials: true})
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

    axios.get(`${API_URL}/stuffs`, {withCredentials: true})
    .then((response) => {
      let sorteddDown = JSON.parse(JSON.stringify(response.data))
      let sorteddUp = JSON.parse(JSON.stringify(response.data))
      this.setState({
        stuffs: response.data.sort((a, b) => {
          if(a.cityStuff < b.cityStuff){
            return -1
          } else if (a.cityStuff > b.cityStuff){
            return 1
          } else {
            return 0
          }
        }),
        stuffSortPriceDown: sorteddDown.sort((a, b) => {return a.priceStuff - b.priceStuff}),
        stuffSortPriceUp: sorteddUp.sort((a, b) => {return b.priceStuff - a.priceStuff})
      })
    })

    axios.get(`${API_URL}/frees`, {withCredentials: true})
    .then((response) => {
      this.setState({
        frees: response.data.sort((a, b) => {
          if(a.city < b.city){
            return -1
          } else if (a.city > b.city){
            return 1
          } else {
            return 0
          }
        })
      })
    })
  }



  handleAdd = (e, someImg) => {
    e.preventDefault()
    const {price, size, bikeType, image, phone, city} = e.target
    console.log(someImg)
    let imageFile = null

    if (image && image.files.length){
      imageFile = image.files[0]
    } else {
      imageFile = someImg
    }
    console.log(imageFile)
    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageFile)
    

    axios.post(`${API_URL}/upload`, uploadForm, {withCredentials: true})
      .then((response) => {
        let newBike = {
          price: price.value,
          size: size.value,
          bikeType: bikeType.value,
          image: response.data.image,
          phone: phone.value,
          city: city.value
        }
        axios.post(`${API_URL}/create`, newBike, {withCredentials: true})
        .then((response) => {
          this.setState({
            bikes: [ response.data , ...this.state.bikes]
          }, () => {
            this.props.history.push('/')
          })
        })

      })


  }

  

  handleAddStuff = (e) => {
    e.preventDefault()
    const {categoryStuff, nameStuff, priceStuff, phoneStuff, cityStuff, image} = e.target
    
    let imageFile = image.files[0]

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageFile)
    

    axios.post(`${API_URL}/upload`, uploadForm, {withCredentials: true})
      .then((response) => {
        let newStuff = {
          categoryStuff: categoryStuff.value,
          nameStuff: nameStuff.value,
          priceStuff: priceStuff.value,
          phoneStuff: phoneStuff.value,
          cityStuff: cityStuff.value,
          image: response.data.image

        }
        axios.post(`${API_URL}/createS`, newStuff, {withCredentials: true})
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
    

    axios.post(`${API_URL}/upload`, uploadForm, {withCredentials: true})
      .then((response) => {
        let newFree = {
          nameFree: nameFree.value,
          phoneFree: phoneFree.value,
          cityFree: cityFree.value,
          image: response.data.image

        }
        axios.post(`${API_URL}/createF`, newFree)
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
    axios.delete(`${API_URL}/bikes/${bikeId}`, {withCredentials: true})
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
    axios.delete(`${API_URL}/stuffs/${stuffId}`,{withCredentials: true})
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
    axios.delete(`${API_URL}/frees/${freeId}`, {withCredentials: true})
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
    axios.patch(`${API_URL}/bikes/${bike._id}`, {
      price: bike.price,
      size: bike.size,
      bikeType: bike.bikeType,
      phone: bike.phone,
      city: bike.city
    }, {withCredentials: true})
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

  handleEditStuff = (stuff) => {
    axios.patch(`${API_URL}/stuffs/${stuff._id}`, {
      categoryStuff: stuff.categoryStuff,
      priceStuff: stuff.priceStuff,
      nameStuff: stuff.nameStuff,
      phoneStuff: stuff.phoneStuff,
      cityStuff: stuff.cityStuff
    }, {withCredentials: true})
    .then(() => {
        let updatedStuffs = this.state.stuffs.map((myStuff) => {
          if (myStuff._id === stuff._id) {
            myStuff = stuff
          }
          return myStuff
        })

        this.setState({
          stuffs: updatedStuffs
        }, () => {
          this.props.history.push('/bikeStuff')
        })
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    const {username, email, password} = e.target

    axios.post(`${API_URL}/signup` , {
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
    .catch((error) => {
      console.log(error.response)
      this.setState({
        errorMessage: error.response.data.errorMessage
      })
  })


  }


  handleSignIn = (e) => {
    e.preventDefault()
    e.preventDefault()
    const {email, password} = e.target

    axios.post(`${API_URL}/signin` , {
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
    axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
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
            return <AddBikeForm loggedInUser={loggedInUser} onAdd={this.handleAdd} />
          }} />
          <Route exact path='/bike/:bikeId'  render={(routeProps) => {
            return <BikeDetail onDelete={this.handleDelete} loggedInUser={loggedInUser} {...routeProps}/>
          }} />
          <Route exact path="/bike/:bikeId/edit" render={(routeProps) => {
              return <EditForm loggedInUser={loggedInUser} onEdit={this.handleEdit} {...routeProps} />
            }} />

          <Route exact path='/bikeStuff' render={() => {
            return <StuffList stuffs={this.state.stuffs} />
          }} />
          <Route path='/sellStuffs' render={() => {
            return <AddStuffForm loggedInUser={loggedInUser} onAddStuff={this.handleAddStuff} />
          }} />
          <Route exact path='/stuff/:stuffId' render={(routeProps) => {
            return <StuffDetail loggedInUser={loggedInUser} onDeleteStuff={this.handleDeleteStuff} {...routeProps}/>
          }} />
          <Route exact path="/stuff/:stuffId/edit" render={(routeProps) => {
              return <EditFormStuff loggedInUser={loggedInUser} onEditStuff={this.handleEditStuff} {...routeProps} />
            }} />
          

          <Route exact path='/freeStuff' render={() => {
            return <FreeList frees={this.state.frees} />
          }} />
          <Route path='/giveAway' render={() => {
            return <AddFreeForm loggedInUser={loggedInUser}  onAddFree={this.handleAddFree} />
          }} />
          <Route exact path='/free/:freeId' render={(routeProps) => {
            return <FreeDetail loggedInUser={loggedInUser} onDeleteFree={this.handleDeleteFree} {...routeProps}/>
          }} />
          
          <Route path="/sign-in" render={(routeProps) => {
            return <SignIn onUnmount={this.handleUnMount}  errorMessage={errorMessage}   onSignIn={this.handleSignIn} {...routeProps} />
          }}/>
          <Route path="/sign-up" render={(routeProps) => {
            return <SignUp onUnmount={this.handleUnMount} errorMessage={errorMessage} onSignUp={this.handleSignUp} {...routeProps} />
          }}/>

          <Route exact path='/bikeSortPriceDown' render={() => {
            return <BikeSortPriceDown bikeSortPriceDown={this.state.bikeSortPriceDown} />
          }} />
          <Route exact path='/bikeSortPriceUp' render={() => {
            return <BikeSortPriceUp bikeSortPriceUp={this.state.bikeSortPriceUp} />
          }} />

          <Route exact path='/stuffSortPriceDown' render={() => {
            return <StuffSortPriceDown stuffSortPriceDown={this.state.stuffSortPriceDown} />
          }} />
          <Route exact path='/stuffSortPriceUp' render={() => {
            return <StuffSortPriceUp stuffSortPriceUp={this.state.stuffSortPriceUp} />
          }} />
         

          

            
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)