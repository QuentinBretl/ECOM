import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="BeSublimeLogo" />
        </div>
        <div className='nav-wrap'>
            <div></div>
            <div className='nav-select'>
                <ul className='nav-menu'>
                    <li>A l'Affiche</li>
                    <li>Notre Sélection</li>
                    <li>Offre ta Box</li>
                </ul>
            </div>
            <div className='nav-log-cart'>
                    <FaUser />
                    <FaShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default Navbar