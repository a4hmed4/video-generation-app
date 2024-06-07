import React, { useState } from 'react';
import './application.css';
import { img01, } from './imports';


const Application = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [textInput, setTextInput] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const renderOptionContent = () => {
    if (selectedOption === 'image') {
      return (
        <div className="content-section">
          <div className="content-title">Group of Images</div>
          <div className="content-body">
            <div className="images-grid">
              <img src={img01} alt="img1" />
              <img src={img01} alt="img1" />
              <img src={img01} alt="img1" />
              <img src={img01} alt="img1" />
              <img src={img01} alt="img1" />
              <img src={img01} alt="img1" />
            </div>

            <br></br><input type="file" accept="image/*" onChange={handleFileUpload} />
          </div>
        </div>
      );
    } else if (selectedOption === 'speech') {
      return (
        <div className="content-section">
          <div className="content-title">Group of Voices</div>
          <div className="content-body">
            <input type="file" accept="audio/*" onChange={handleFileUpload} />
            <button className="content-button">Record</button>
          </div>
        </div>
      );
    } else if (selectedOption === 'text') {
      return (
        <div className="content-section">
          <div className="content-title">Text Input</div>
          <div className="content-body">
            <textarea
              placeholder="Enter your text here"
              value={textInput}
              onChange={handleTextInputChange}
            />
            <button className="content-button" onClick={() => handleOptionSelect('speech')}>
              Choose Speech
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="vga__application section__padding" id="application">
      <div className="content-container">
        <div className="content-box">
          <div className="option-buttons">
            <button onClick={() => handleOptionSelect('image')}>Image</button>
            <button onClick={() => handleOptionSelect('speech')}>Speech</button>
            <button onClick={() => handleOptionSelect('text')}>Text</button>
          </div>
          <div className="option-content">
            {selectedOption && renderOptionContent()}
          </div>
          <div className="generate-button-container">
            <button className="generate-button" onClick={() => console.log('Generating with:', { selectedOption, uploadedFile, textInput })}>
              Generate
            </button>
          </div>
        </div>
        <div className="generated-video-box">
          <div className="video-title">Generated Video</div>
          <div className="video-content">
            <div className="video-placeholder">Video will be displayed here</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Application;


