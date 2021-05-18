import React from "react"
import MyNav from "./components/MyNav"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Post from "./components/Post"
import NotFound from "./components/NotFound"

export default function App() {
  return (
   <div>
   <MyNav />
   <Switch>
   <Route exact path="/" ><Home/> </Route>
   <Route path="/signin" ><Login/> </Route>
   <Route path="/signup" ><SignUp/> </Route>
   <Route path="/profile" ><Profile/> </Route>
   <Route path="/create" ><Post/> </Route>
   <Route component={NotFound} />
   </Switch>
   </div>
  )
}
