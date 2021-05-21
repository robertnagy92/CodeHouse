import React,{useEffect, createContext, useReducer, useContext } from "react"
import MyNav from "./components/MyNav"
import "./App.css"
import {Switch, Route, useHistory} from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import SingleProfile from "./components/SingleProfile"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Post from "./components/Post"
import NotFound from "./components/NotFound"
import { reducer, initialState } from "./contextReducers/user"

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
       history.push('/signin')
    }
  },[])
 
  return (
     <Switch>
   <Route exact path="/" ><Home/> </Route>
   <Route path="/signin" ><Login/> </Route>
   <Route path="/signup" ><SignUp/> </Route>
   <Route exact path="/profile" ><Profile/> </Route>
   <Route path="/profile/:userId"><SingleProfile/></Route>
   <Route path="/create" ><Post/> </Route>
   <Route component={NotFound} />
   </Switch>
   
  )
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
 <UserContext.Provider value={{state,dispatch}}>
   <MyNav />
   <Routing />
 </UserContext.Provider>
  )
}