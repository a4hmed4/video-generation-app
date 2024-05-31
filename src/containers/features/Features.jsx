import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Embrace the Present Future',
    text: 'Explore how technologies once considered futuristic, are already integrated into various aspects of daily life.  Reflect on the rapid pace of technological advancement and its impact on industries, economies, and society as a whole.',
  },
  {
    title: 'Actively Engage with Tomorrow',
    text: 'Emphasize the importance of proactive engagement with emerging technologies and trends to stay relevant and competitive.',
  },
  {
    title: 'Empower Your Vision of Tomorrow',
    text: 'Inspire individuals to envision and pursue their desired futures, leveraging the possibilities offered by advancing technologies.',
  },

];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
