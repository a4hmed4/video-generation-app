import React from 'react';
import { colab, vscode, flask, react } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={colab} />
    </div>
    <div>
      <img src={vscode} />
    </div>
    <div>
      <img src={flask} />
    </div>
    <div>
      <img src={react} />
    </div>

  </div>
);

export default Brand;
