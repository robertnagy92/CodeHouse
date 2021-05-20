import React,{useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import M from "materialize-css"

export default function SignUp() {

  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const PostData = () => {
    fetch("http://localhost:5005/signup",{
      method: 'post',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        email,
        password
      })
    }).then(res => res.json()) 
    .then(data => {
      if(data.error){
        M.toast({html: data.error, classes: "#ff3d00 deep-orange accent-3"})
      }
      else{
        M.toast({html: data.message, classes: "#00e676 green accent-3"})
        history.push('/signin')
      }
    }).catch(err => {
      console.log(err)
    })
  }

    return (
        <div className='logincard'>
           <div className="card auth-card">
             <h2>Code House</h2>
             <input type="text" placeholder="username" value={username} onChange = {(e) => setUsername(e.target.value)} />
             <input type="text" placeholder="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
             <input type="password" placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>

             <button onClick={() => PostData()} className="btn waves-effect waves-light #64b5f6 blue darken-1">Register</button>
             <h6>
               <Link to="/signin">Already have an account?</Link>
             </h6>
        </div>
     </div>
    )
}
