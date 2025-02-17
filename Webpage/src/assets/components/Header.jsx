import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTimes, faBars);

function Header() {
  const styleBG = { display: "flex", alignItems: "center"};
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div style={{marginTop:9,width:"81%"}}className='header'>
      <h1>KKM FRESH FOODS</h1>
      <div className='DeskNav' style={styleBG}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </div>
      <button className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <nav className={`mobile-menu ${isOpen ? "open" :" "}`}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        </nav>
    </div>
  );
}

export default Header;