import React from 'react'
import image from "./images/contactimg.png"
import "./css/ContactUs.css"

function ContactUs() {
  return (
    <div className='contact-container'>
      <div className='contact-card1'>
        <img src={image} alt='contact center' className='contact-img'/>
      </div>
      <div className='contact-card2'> 
      <p className='cc-info'><i className="fa">&#xf095;</i> 01563543599</p>
      <br/>
      <p className='cc-info'><i className="fa">&#xf0e0;</i> info@findmynexthome.com</p>
      </div>
    </div>
  )
}

export default ContactUs