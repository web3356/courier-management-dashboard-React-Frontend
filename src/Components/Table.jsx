import { useState } from "react"

// import React, { useState } from 'react'
function Table() {
const[rollno,setroolno]=useState("")
const[name,setname]=useState("")
const[education,seteducation]=useState("")
const[cnic,setcnic]=useState("")
const[data,setdata]=useState([])
const handleRoll=(e)=>{
  setroolno(e.target.value)
}
const studentName=(e)=>{
setname(e.target.value)
}
const StudentClass=(e)=>{
seteducation(e.target.value)
}
const studentCnic=(e)=>{
setcnic(e.target.value)
}

const handlesubmitForm=(e)=>{
  e.preventDefault()
  
      // Create Student Object
    const student = {
      rollno: rollno,
      name: name,
      education: education,
      cnic: cnic,
    };
    setroolno("")
    setcnic("")
    seteducation("")
    setname("")

    // Add Student Object into Array
    setdata([...data, student]);
}

  return (
<>
<div className="container-fluid mt-3" >
  <h1 className='text-center'>School Data Entry</h1>
<div className="box" style={{display:"flex",justifyContent:"center",gap:"10px"}}>
<div className="form" style={{height:"570px",width:"100%",background:"green",border:"1px solid purple"}}>
  
  <form action="" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"90vh"}} onSubmit={handlesubmitForm}>

<input type="text" placeholder='Enter Student Roll No' className="form-control w-50 m-2 py-2" onChange={handleRoll} value={rollno} />


<input type="text" placeholder='Enter Student Name' className="form-control w-50 m-2 py-2" value={name} onChange={studentName}   />


<input type="text" placeholder='Entr Student Class' className="form-control w-50 m-2 py-2" value={education} onChange={StudentClass}  />


<input type="text" placeholder='Enter Student CNIC' className="form-control w-50 m-2 py-2" value={cnic} onChange={studentCnic}  />
<div className="text-center">
    <button className="btn btn-danger px-5" >Submit</button>
  </div>
  </form>
</div>
<div className="table" style={{height:"570px",width:"100%",background:"red" ,border:"1px solid purple",display:"flex",flexDirection:"column"}}>


<table className="table-bordered">
<thead>
  <tr>
  <th>Student Roll No</th>
  <th>Student Name</th>
  <th>Student Class</th>
  <th>Student CNIC</th>
</tr>
</thead>
<tbody>
 {
  data.map((item,index)=>(
     <tr key={index}>
    <td>{item.rollno}</td>
    <td>{item.name}</td>
    <td>{item.education}</td>
    <td>{item.cnic}</td>
  </tr>
  ))
 }

  


    

 
</tbody>

</table>


  
</div>
</div>

</div>

</>
  )
}

export default Table