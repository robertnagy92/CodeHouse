import React from 'react'
import goat from "../images/goat.png"

export default function Profile() {
    return (
       <div>
         <div>
           <div>
             <img src={goat} alt="imgg" style={{width:"200px",height:"200px",borderRadius:"80px"}}/>
           </div>
           <div>
             <h5>Name</h5>
           </div>
         </div>
       </div>
    )
}
