import React from 'react'
import { useState } from 'react';
import './Footer.css'
import {ReactComponent as Facebook} from './Logo/Facebook.svg';
import {ReactComponent as Instagram} from './Logo/Instagram.svg'
import {ReactComponent as Twitter} from './Logo/Twitter.svg'

function Footer() {
  const[userMail, setUserMail] = useState("");
  const handleMail=(event)=>{
    setUserMail(event.target.value);
    
  }
  const submitMail=(event)=>{
    event.preventDefault();

    console.log(`mail is ${userMail}`)

    fetch('https://nikhil-module-7-test-project-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userMail: userMail
      }),
    }
  )
    .then((res) => {
      console.log("res : ", res);
      return res.json();
    })
    .then((data) => {
      console.log("data :", data);
    });

    
    var mailInput = document.getElementById('mail');
    mailInput.value=''

    

  }
  return (
    <div className='footer'>
      <div className='footer-head'>
        <h3>Acciojob</h3>
        <div className='social'>
          <a href='#'><Facebook /></a>
          <a href='#'><Instagram /></a>
          <a href='#'><Twitter /></a>
        </div>
      </div>
      <div className='line'/>
    <div className='footer-main'>
      <div className='first'>
        <h5>Company Info</h5>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Carrier</a></li>
        <li><a href='#'>We are hiring</a></li>
        <li><a href='#'>Blog</a></li>
      </div>
      <div className='second'>
        <h5>Legal</h5>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Carrier</a></li>
        <li><a href='#'>We are hiring</a></li>
        <li><a href='#'>Blog</a></li>
      </div>
      <div className='third'>
        <h5>Features</h5>
        <li><a href='#'>Business Marketing</a></li>
        <li><a href='#'>User Analytics</a></li>
        <li><a href='#'>Live Chat</a></li>
        <li><a href='#'>Unlimited Support</a></li>
      </div>
      <div className='forth'>
        <h5>Resources</h5>
        <li><a href='#'>IOS & Android</a></li>
        <li><a href='#'>Watch a Demo</a></li>
        <li><a href='#'>Customers</a></li>
        <li><a href='#'>API</a></li>
        
      </div>
      <div className='fifth'>
        <h5>Get In Touch</h5> 
        <form className='form' onSubmit={submitMail}>
          <input type="text" onChange={handleMail} id='mail' placeholder='Your Email'className='input' />

          <button type='submit'className='button'>Subscribe</button>
        <p>Lorem impsum dolor amit</p>
        </form>
      </div>
    </div>
    <div className='disclaimer'>
      <p>Made With ❤️ at Acciojob</p>
    </div>
    </div>
  )
}

export default Footer