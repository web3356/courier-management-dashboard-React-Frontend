import React from 'react'
import insta1 from "../assets/Insta Images/insta-1.jpg"
import insta2 from "../assets/Insta Images/insta-2.jpg"
import insta3 from "../assets/Insta Images/insta-3.jpg"
import insta4 from "../assets/Insta Images/insta-4.jpg"
import insta5 from "../assets/Insta Images/insta-5.jpg"
import insta6 from "../assets/Insta Images/insta-6.jpg"
function Card() {
    const BridalData=[
        {
            img:insta1,
Bridal_name:"Saba",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",

        },

        


        {
            img:insta2,
Bridal_name:"Uja Arshad",
age:20,
Husandband_Name:"Shahbaz Khan",
husandband_age:"22years",
        },


        {
            img:insta3,
Bridal_name:"Shumaila tasleem",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",
        },


        {
            img:insta4,
Bridal_name:"Zeenat Bib",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",
        },



        {
            img:insta5,
Bridal_name:"Timsal Zainab",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",
        },



        {
            img:insta6,
Bridal_name:"Maryam",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",
        },

          {
            img:insta2,
Bridal_name:"Uja Arshad",
age:20,
Husandband_Name:"Shahbaz Khan",
husandband_age:"22years",
        },

         {
            img:insta5,
Bridal_name:"Timsal Zainab",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",
        },

         {
            img:insta4,
Bridal_name:"Zeenat Bib",
age:20,
Husandband_Name:"Muahmmad Yousuf",
husandband_age:"22years",
        },

        



    ]
  return (
    <>

<div className="container-fluid">
     <h1 className='display-5 fw-bold text-dark text-center mt-4'>Pakistan Banquest Hall</h1>
    <div className="nav" style={{display:"flex",justifyContent:"center"}}>
<div className="data" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",padding:"10px",margin:"17px", flexWrap:"revert" }}>
   <button className='btn btn-danger'>Home</button>
   <button className='btn btn-primary'>About Us</button>
   <button className='btn btn-success'>Gallery</button>
   <button className='btn btn-secondary'>My Bookings</button>
   <button className='btn btn-info'>Contact Us</button>
   <button className='btn btn-warning'>Contact Us</button>
</div>




    </div>
   
    <div className="row">
        {
            BridalData.map((item,index)=>(
<div className="col-md-3" key={index}>

    <div class="card text-start">
    <img class="card-img-top" src={item.img} alt="Title" />
    <div class="card-body">
        <h4 class="card-title">{item.Bridal_name}</h4>
        <p class="card-text">{item.age}</p>
        <p class="card-text">{item.Husandband_Name}</p>
        <p class="card-text">{item.husandband_age}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo debitis tempore quos quae in harum porro aperiam ipsum necessitatibus? Sequi qui rerum eveniet tempora pariatur maiores asperiores tempore nisi molestias.</p>
         <button className='btn btn-success'>Click For More Fashion</button>

    </div>
   
</div>
</div>



            ))
        }
        
    </div>

</div>
</>
  )
}

export default Card