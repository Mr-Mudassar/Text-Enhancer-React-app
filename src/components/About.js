import React from "react";

 export default function About(props) {
   return (
           <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
       <div className="about-section">
  <h1>About Us</h1>
  <p>Some text about who we are and what we do.</p>
</div>
<div className="row">
  <div className="column">
    <div className="card"> 
    <div className="container" style={{backgroundColor: props.mode === 'light'?'white':'#2b1f36',color: props.mode === 'light'?'black':'white'
     ,border: props.mode === 'light'?'1px solid gray':'1px solid white', borderRadius: '5px'}}>
      <h2> Muhammad Mudassar</h2>
      <img src="./myimages/resized.jpg" alt="Muhammad Mudassar" style={{width: 280}}/>
        <p className="title"><strong>CEO & Founder</strong></p>
        <p>My self Muhammd Mudassar Mughal and I'm the creater of this utility. I'm happy to help you by websites and apps.</p>
        <hr/>
        <p>Contact us through our Email adress
          <br/>
        <strong>mudassarmuhammad776@gmail.com</strong></p>
        </div>
      </div>
    </div>
  </div>
</div>
   )
 }
