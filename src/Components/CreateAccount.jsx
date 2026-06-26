import React from 'react'
import { Link } from 'react-router-dom'
function CreateAccount() {
  return (
<>
<div className="container">
<div className="logo">
    <h3>Logo</h3>
</div>
<div className="data" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>
    <form action="" style={{height:"400px",width:"350px",border:"1px solid black",display:"flex",flexDirection:"column",gap:"30px",padding:"10px",margin:"17px"}}>
<input type="text" placeholder='Username' />
<input type="password" placeholder='password' />
<input type="email" placeholder='Email' />

<Link className='btn btn-danger' to=''>Signup</Link>
<span>Have an Account Please</span>
<Link to='/signin'>Sign in</Link>
   
    </form>
</div>




</div>

</>
  )
}

export default CreateAccount