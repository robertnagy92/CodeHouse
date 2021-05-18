import React from 'react'

export default function Home() {
    return (
       <div className="home">
           <div className="card home-card">
               <h6>Username</h6>
               <div className="card-image">
                   <img src="https://pbs.twimg.com/profile_images/1358174805023993860/d4929_io.png" alt="wallpaper" style={{width: "50%"}}/>
               </div>
               <div className="card-content">
                   <h6>Title</h6>
                   <p>cool post</p>
                   <input type="text" placeholder="add comment"/>
               </div>
           </div>
       </div>
    )
}
