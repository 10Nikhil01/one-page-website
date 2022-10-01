import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {ReactComponent as User} from './Logo/User.svg'
import {ReactComponent as Cart} from './Logo/Cart.svg'
import {ReactComponent as Search} from './Logo/Search.svg'
import {ReactComponent as Heart} from './Logo/Heart.svg'

function Navbar({number}) {

  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <h3>Acciojob</h3>
      </div>
        <div className='navbar-main'>
          <div className='navbar-menu left'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/' className='active'>Shop</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='#'>Pages</Link></li>
          </div>
          <div className='navbar-menu right'>
            <li><a href='/' className='user'><User /><span>Login/Register</span></a></li>
            <li><a href='/'className='small'><Search /></a></li>
            <li><a href='/'className='small'><Cart /><span>{number}</span></a></li>
            <li><a href='/'className='small'><Heart /> 1</a></li>
          </div>
        </div>
        
        </div>
  )
}

export default Navbar;