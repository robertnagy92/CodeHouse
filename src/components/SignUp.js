import React,{useState} from 'react'
import {Link} from "react-router-dom"


export default function SignUp() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const PostData = () => {
  
  }

    return (
        <div className='logincard'>
           <div className="card auth-card">
             <h2>Code House</h2>
             <input type="text" placeholder="username" value={username} onChange = {(e) => setUsername(e.target.value)} />
             <input type="text" placeholder="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
             <input type="text" placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>

             <button onClick={() => PostData()} className="btn waves-effect waves-light #64b5f6 blue darken-1">Register</button>
             <h6>
               <Link to="/signin">Already have an account?</Link>
             </h6>
        </div>
     </div>
    )
}
