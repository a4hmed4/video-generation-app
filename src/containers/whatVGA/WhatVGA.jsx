import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatVGA.css';


const WhatVGA = () => (
  <div className="vga__whatvga section__margin">
    <h1 className="gradient__text">_________________________________________________________</h1>
    <br></br>
    <br></br>

    <div className="vga__whatvga-feature" id="vga">
      <Feature title="What is VGA?" text="Creating a realistic video of a talking head from a facial image and speech audio is difficult. Sometimes, head movements look abnormal, expressions look unnatural, or even a person's identity seems right. Guess these things are talking where there is essentially no origin in learning from a 2D domain, which may be limited. On the other hand, using 3D information directly can result in harsh expressions and weird-looking videos
. So, in our project, we came up with a solution. They were able to create a system that captures 3D movement details (such as head position and facial expressions) from the audio. This system then adjusts the 3D model of the video to suit these interests, making it appear more natural." />
    </div>
    <br></br>
    <br></br>
    <h1 className="gradient__text">_________________________________________________________</h1>
    <br></br>
    <br></br>
    <div className="vga__whatvga-heading">
      <h1 className="gradient__text">The possibilities are beyond our imagination</h1>
    </div>
    <div className="vga__whatvga-container">
      <Feature title="Challenges" text="Replicating realistic human expressions and movements." />
      <Feature title="Innovation" text="Capturing 3D movement details from audio input." />
      <Feature title="Solution" text="Adjusting the 3D model of the video for enhanced realism." />
    </div>
  </div>
);

export default WhatVGA;
