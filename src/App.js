import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css"
import MyNav from './components/MyNav'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import config from './config'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NotFound from "./components/NotFound"
// import Section from './components/Section'

class App extends Component {

  state = {
    user: null,
    error: null,
    fetchingUser: true
  }



  handleSignUp = (e) => {
    e.preventDefault()
    const {username, email , password} = e.target
    let newUser = {
      username: username.value, 
      email: email.value, 
      password: password.value
    }
    
    axios.post(`${config.API_URL}/api/signup`, newUser, {withCredentials: true})
      .then((response) => {
        //the real data is always in response.data
          this.setState({
            user: response.data //save the user info in the state
          }, () => {
              //Redirect after the user info has been fetched
              this.props.history.push('/')
          })
      })
      .catch(() => {
        console.log('SignUp failed')
      })
  }

  handleSignIn = async (e) => {
    e.preventDefault()
    const { email , password} = e.target
    let newUser = {
      email: email.value, 
      password: password.value
    }

    axios.post(`${config.API_URL}/api/signin`, newUser, {withCredentials: true})
      .then((response) => {
        this.setState({
          user: response.data,
          error: null
        }, () => {
          this.props.history.push('/')
        })
      })
      .catch((errorObj) => {
        this.setState({
          error: errorObj.response.data
        })
      })
  }


  handleLogout = () => {
      axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
        .then(() => {
          this.setState({
            user: null
          })
        })
        .catch((errorObj) => {
          // the real error json is always is the .response.data 
          this.setState({
            error: errorObj.response.data
          })
      })
  }



    // Make sure all the initial data that you show to the user is fetched here
  
  componentDidMount(){
  
      axios.get(`${config.API_URL}/api/user`, {withCredentials: true}) 
        .then((response) => {
          this.setState({ 
            user: response.data,
            fetchingUser: false,
          })
        })
        .catch((errorObj) => {
          this.setState({
            error: errorObj.response.data,
            fetchingUser: false,
          })
        })
  }

  
  render() {
    const {error, user, fetchingUser} = this.state

    // 
    if(fetchingUser){
      return <p>Loading . . . </p>
    }

    return (
      <div>
        <MyNav onLogout={this.handleLogout} user={user} />
        {/* <Section /> */}
        <Switch>
            <Route  path="/signin"  render={(routeProps) => {
              return  <SignIn error={error} onSignIn={this.handleSignIn}  {...routeProps}  />
            }}/>
            <Route  path="/signup"  render={(routeProps) => {
              return  <SignUp onSubmit={this.handleSignUp} {...routeProps}  />
            }}/>
            <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
