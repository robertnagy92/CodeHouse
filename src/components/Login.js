import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function Login() {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const PostData = ()=>{
  
       
    }

    return (
        <div className='logincard'>
           <div className="card auth-card">
             <h2>Code House</h2>
             <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
             <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()} >
                Login
             </button>
             <h6>
               <Link to="/signup">No account yet?</Link>
             </h6>
        </div>
     </div>
    )
}
