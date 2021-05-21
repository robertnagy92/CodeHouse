import React,{useContext, useEffect, useState} from 'react'
import {UserContext} from "../App"


export default function Profile() {
  const [myPictures, setPictures] = useState([])
  const {state,dispatch} = useContext(UserContext)
  // const [image, setImage] = useState('')
 useEffect(() => {
   fetch('http://localhost:5005/myposts',{
     headers:{
       "Authorization":"Bearer " + localStorage.getItem("jwt")
     }
   }).then(res => res.json())
   .then(result => {
     setPictures(result.mypost)
   })
 },[])
    return (
      <div style={{maxWidth:"550px",margin:"0px auto"}}>
          <div style={{
             margin:"18px 0px",
              borderBottom:"1px solid grey"
          }}>

        
          <div style={{
              display:"flex",
              justifyContent:"space-around",
             
          }}>
              <div>
                  <img style={{width:"160px",height:"160px",borderRadius:"80px", boxShadow:"2px 2px black"}}
                  src={state ? state.profilePicture : "loading"} alt="img"
                  />
                
              </div>
              <div className="profileText">
                  <h4>{state?state.username:"loading"}</h4>
                  <h5>{state?state.email:"loading"}</h5>
                  <div style={{width:"100%"}}>
                       <h6>{myPictures.length} posts</h6>
                   </div>
              </div>
          </div>
           </div>      
          <div className="gallery">
              {
                  myPictures.map(item=>{
                      return(
                       <img key={item._id} className="item" src={item.image} alt={item.title}/>  
                      )
                  })
              }

          
          </div>
      </div>
  )
}
