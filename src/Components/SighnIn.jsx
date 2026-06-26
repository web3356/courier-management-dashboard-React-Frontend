import React from 'react'
import { Link  } from 'react-router-dom'
function SighnIn() {
  return (
<>
<div className="container-fluid">
<div className="logingfo" style={{display:"flex",justifyContent:"center",alignItems:"center ",flexDirection:"column"}}>
<h1>Login</h1>
<form action="" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh",flexDirection:"column",gap:"3rem",width:"300px",border:"1px solid black"}}>
    <input type="text" placeholder='Username' />
    <input type="password" placeholder='password' />
    
     
    <Link type='btn btn-danger' to='/dashboard'>Login</Link>

    <span>Don't Have a Account please Signup</span>
    <Link to='/createccount'>Signup</Link>
</form>


</div>

</div>


</>
  )
}

export default SighnIn