import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';


const Header = () => (
  <div className="vga__header section__padding" id="home">
    <div className="vga__header-content">
      <h1 className="gradient__text">VGA: Image & Speech to Video Generation APP</h1>
      <p>The idea of ​​our application is to convert image and sound into artificial video using artificial intelligence tools.<br></br> See what the model can do! <br></br> We hope you enjoy</p>

      <div className="vga__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <button type="button"><a href="#application">Get Started</a></button>
      </div>

{/*       <div className="gpt3__header-content__people">
        <img src={people} />
        <p>This App is done with them</p>
      </div>  */}
    </div>

    <div className="vga__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
