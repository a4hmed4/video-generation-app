import React from 'react';
import VGALogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="vga__footer section__padding">
    <div className="vga__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

{/*     <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="vga__footer-links">
      <div className="vga__footer-links_logo">
        <img src={VGALogo} alt="gpt3_logo" />
        <p>Deployed by VGA Team, <br /> All Rights Reserved</p>
      </div>
      <div className="vga__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="vga__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="vga__footer-links_div">
        <h4>Get in touch</h4>
        <p>Semester 6</p>
        <p>Spring</p>
        <p>AI327 - Work-based Professional Project in Artificial Intelligence(II)</p>
      </div>
    </div>

    <div className="vga__footer-copyright">
      <p>@2024  VGA. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
