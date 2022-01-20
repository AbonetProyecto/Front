import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ABONET
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              INICIO
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/abogados'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ABOGADOS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/reseña'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              RESEÑA
            </Link>
          </li>
          <li>
            <Link
              to='/mapa'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              MAPA
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
