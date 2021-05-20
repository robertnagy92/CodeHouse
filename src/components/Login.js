import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from "materialize-css"
import {UserContext} from "../App"

export default function Login() {
    const {state, dispatch} = useContext(UserContext)

    const history = useHistory()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const PostData = ()=>{
  
        fetch("http://localhost:5005/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#ff3d00 deep-orange accent-3"})
           }
           else{
               localStorage.setItem('jwt', data.token)
               localStorage.setItem('user', JSON.stringify(data.user))
               dispatch({type:"USER", payload:data.user})
               M.toast({html:"signedin success",classes:"#00e676 green accent-3"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
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
