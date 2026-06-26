import React from 'react'
import { Link } from 'react-router-dom'
function TrackOrder() {
  return (
    <>
<div className="contaier-fluid">
    <div className="logo m-4">
        <h4>logo</h4>
    </div>
    <div className="track" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"40vh",background:"green"}}>
      <input type="text" placeholder="Please Enter Your Refrence Order" style={{width:"20rem",height:"4rem"}}  />
      <button style={{width:"10rem",height:"4rem"}} ><Link to='/createccount'>Track</Link></button>






      
    </div>
    <div className="parent" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",gap:"3rem"}}>
      <div className="child" style={{height:"200px",width:"200px",background:"red"}}>

      </div>
      <div className="child" style={{height:"200px",width:"200px",background:"black"}}></div>
    </div>
</div>
    
    
    </>
  )
}

export default TrackOrder