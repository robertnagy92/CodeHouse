import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../App'
import {Link} from "react-router-dom"

export default function Home() {
    const [data, setData] = useState([]) 
    const {state,dispatch} = useContext(UserContext) 
    useEffect(() => {
        fetch("http://localhost:5005/allposts", { //fetch all posts if user has right credentials
            headers:{
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
         setData(result.posts)
        })
    })


    const likePost = (id) => {
        fetch('http://localhost:5005/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }


    const unlikePost = (id) => {
        fetch('http://localhost:5005/unlike', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    const postComment = (text, postId) => {
        fetch("http://localhost:5005/comment", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json)
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)

        }).catch(err => {
            console.log(err)
        })
    }

    const deletePost = (postId) => {
        fetch(`http://localhost:5005/removepost/${postId}`, {
            method: "delete",
            headers: {
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            }

        }).then(res => res.json())
        .then(result => {
            console.log(result)
            const newData = data.filter(item => { //filtering out deleted record
                return item._id !== result._id
            })
            setData(newData)
        })
    }


    return (
       <div className="home">
           {
            data.map(item => {
                   return(
                <div className="card home-card #cfd8dc blue-grey lighten-4 opacity" key={item._id}>
                <h6>
                    <p style={{fontWeight:"600", textAlign:"center"}}></p>
                    <Link  style={{color: "black", fontWeight: "700"}} to={item.postedBy._id !== state._id? "/profile/"+item.postedBy._id : "/profile"}>Posted by: {item.postedBy.username}</Link> {item.postedBy._id === state._id && 
                    <i  className="material-icons" style={{float: "right"}} onClick={() => deletePost(item._id)}>delete</i>
    
                    }</h6>
                 <div className="card-image">
                   <img src={item.image} alt="wallpaper" />
                </div>
                <div className="card-content">
                    {item.likes.includes(state._id)
                    ? 
                    <i onClick={() => {unlikePost(item._id)}} className="material-icons">delete_forever</i>
                    :
                    <i onClick={() => {likePost(item._id)}} className="material-icons">local_pizza</i>
                    }
                   <h6>{item.likes.length} slices</h6>
                   <h5 style={{fontWeight:"600"}}>{item.title}</h5>
                   <p style={{fontSize: "18px"}}>{item.body}</p>

                        {
                            item.comments.map(record => {
                                return (
                                    <h6 key={record._id}><span style={{fontWeight: "700"}}><i class="material-icons">person</i>{record.postedBy.username} </span>{record.text}</h6>
                                )
                            })
                        }

                   <form onSubmit={(e)=> {
                    e.preventDefault()
                    postComment(e.target[0].value,item._id)
                    e.target.reset();
                }}>
                   <input type="text" placeholder="add comment"/>
                   </form>
                   
                </div>
           </div>
                   )
               })
           }
       </div>
    )
}
