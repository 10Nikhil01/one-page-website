import React from 'react';
import './Header.css';
import Girl from './girl.png'

function Header() {
  return (
    <div className='head'>
      <div className='heading'>
        <p>SUMMER 2020</p>
        <h2>NEW COLLECTION</h2>
        <p className='para'>We know how large object will act,<br />but things on a small scale.</p>
        <button type='button'>SHOP NOW</button>
      </div>
      <div className='pic'>
        <img src={Girl} />
      </div>
    </div>
  )
}

export default Header