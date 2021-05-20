import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import M from "materialize-css"

export default function Post() {

    const history = useHistory()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [image,setImage] = useState()
    const [url, setUrl] = useState()


    useEffect(()=>{
        
        if(url){
         fetch("http://localhost:5005/createpost",{
             method:"post",
             headers:{
                 "Content-Type":"application/json",
                 "Authorization":"Bearer "+localStorage.getItem("jwt")
             },
             body:JSON.stringify({
                 title,
                 body,
                 picture:url
             })
         }).then(res=>res.json())
         .then(data=>{
     
            if(data.error){
                M.toast({html: data.error,classes:"#ff3d00 deep-orange accent-3"})
            }
            else{
                M.toast({html:"Success! Post created!",classes:"#00e676 green accent-3"})
                history.push('/')
            }
         }).catch(err=>{
             console.log(err)
         })
     }
     })

     const postData = () =>{
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

    return (
        <div className="card input-field createPost-card">
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)}/>
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                <button className="btn waves-effect waves-light #546e7a blue-grey darken-1" onClick={() => postData()}>Create Post</button>
            </div>
        </div>
    )
}
