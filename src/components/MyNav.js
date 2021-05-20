import React, {useContext} from  'react'
import {Link, useHistory} from "react-router-dom"
import {UserContext} from "../App"

export default function MyNav() {

  const {state, dispatch} = useContext(UserContext)
  const history = useHistory()
  const renderData = () => {
    if(state){  //if user logged in show Profile and Create Post Nav Items
      return [
        <React.Fragment>

        <li><Link to="/create"><i class="material-icons">note_add</i></Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button className="btn waves-effect waves-light btn-small #b71c1c red darken-4" onClick={() => {
          localStorage.clear() //clear localstorage and dispatch CLEAR action
          dispatch({type:"CLEAR"})
          history.push('/signin')
          }}>
        
          Logout</button></li>
        </React.Fragment>
      ]
    }else{  // else redirect user so Register or Sign In
      return [
          <React.Fragment>  
         <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Register</Link></li>
        </React.Fragment>
      ]
    }
  }

  return (
      <nav>
    <div className="nav-wrapper blue">
      <Link to={state ? "/" : "/signin"} className="brand-logo left" style={{fontSize:"15px"}}><i class="material-icons">cloud</i>Home</Link>
      <ul id="nav-mobile" className="right">
        {renderData()}
      </ul>
    </div>
  </nav>
  )
}
