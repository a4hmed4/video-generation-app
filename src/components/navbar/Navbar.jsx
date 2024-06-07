import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
//import logo from 'src/assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="vga__navbar">
      <div className="vga__navbar-links">
        <div className="vga__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="vga__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#vga">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#application">App</a></p>
          <p><a href="#team">our team</a></p>
          <p><a href="#blog">Doc</a></p>
        </div>
      </div>
{/*       <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="vga__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="vga__navbar-menu_container scale-up-center">
          <div className="vga__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#vga">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#application">App</a></p>
          <p><a href="#team">our team</a></p>
          <p><a href="#possibility">Doc</a></p>
          </div>
{/*           <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
