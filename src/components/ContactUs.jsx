import React from 'react'
import image from "./images/contactimg.png"
import "./css/ContactUs.css"

function ContactUs() {
  return (
    <div className='contact-container'>
      <div className='contact-card1'>
        <img src={image} alt='contact center' className='contact-img'/>
      </div>
      <div className='contact-card2'> blah blah blah</div>
    </div>
  )
}

export default ContactUs