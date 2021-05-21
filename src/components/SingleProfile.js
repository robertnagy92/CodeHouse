import React,{useContext, useEffect, useState} from 'react'
import {UserContext} from "../App"
import {useParams} from "react-router-dom"


export default function Profile() {

  const [profile, setProfile] = useState(null)
  const {state,dispatch} = useContext(UserContext)
  const {userId} = useParams()
  console.log(userId)

 useEffect(() => {
   fetch(`http://localhost:5005/user/${userId}`,{
     headers:{
       "Authorization":"Bearer " + localStorage.getItem("jwt")
     }
   }).then(res => res.json())
   .then(result => {
       console.log(result)
      setProfile(result)
   })
 },[])
    return (
        <>
        {profile ?
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src={profile.user.image}
                    />
                </div>
                <div>
                    <h4>{profile.user.username}</h4>
                    <h5>{profile.user.email}</h5>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>{profile.posts.length} posts</h6>
                    </div>
                </div>
            </div>
      
            <div className="gallery">
                {
                    profile.posts.map(item=>{
                        return(
                         <img key={item._id} className="item" src={item.image} alt={item.title}/>  
                        )
                    })
                }
 
            
            </div>
        </div>
        
        
        : <h2>loading...!</h2>}
        
        </>
    )
}
