import React,{useState, useEffect} from 'react'
import {Link, useHistory} from "react-router-dom"
import M from "materialize-css"

export default function SignUp() {

  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [image, setImage] = useState()
  const [url, setUrl] = useState()

  useEffect(() => {
    if(url){
      profileFields()
    }
  },[url])

  const profilePic = () => {
    const data = new FormData()
    data.append("file",image)
    data.append('upload_preset', 'code-house')  //cloudinary project name and username
    data.append('cloud_name',"do6dzkp4n")
    fetch("https://api.cloudinary.com/v1_1/do6dzkp4n/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  const profileFields = () => {
    fetch("http://localhost:5005/signup",{
      method: 'post',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        email,
        password,
        profilePicture: url
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

  const PostData = () => {
 if(image){
   profilePic()
 }else{
   profileFields()
 }
}


    return (
        <div className='logincard'>
           <div className="card auth-card">
             <h2>Code House</h2>
             <input type="text" placeholder="username" value={username} onChange = {(e) => setUsername(e.target.value)} />
             <input type="text" placeholder="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
             <input type="password" placeholder="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
             <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Profile Picture</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>

             <button onClick={() => PostData()} className="btn waves-effect waves-light #64b5f6 blue darken-1">Register</button>
             <h6>
               <Link to="/signin">Already have an account?</Link>
             </h6>
        </div>
     </div>
    )
}
