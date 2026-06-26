import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
   <>
<div className="login mt-3" style={{display:"flex",justifyContent:"flex-end",marginRight:"8rem"}}>
   
    <Link to='/signin'>Sign In</Link>
</div>
   <div className="container-fluid mt-4" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh",background:"red"}}>
<input type="text m-5" placeholder="Enter Your Refrence Number" style={{width:"20rem",height:"4rem"}} />
<button className="btn btn-dark" style={{width:"10rem",height:"4rem"}} ><Link to="/trackorder">Track</Link></button>

   </div>


   
   </>
  )
}

export default LandingPage