import React, { useState, useEffect } from 'react';
import './application.css';
import axios from 'axios';

const Application = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [images, setImages] = useState([]);
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    if (selectedOption === 'image') {
      fetchImages();
    } else if (selectedOption === 'speech') {
      fetchAudios();
    }
  }, [selectedOption]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/list_images/');
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchAudios = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/list_audio/');
      setAudios(response.data.audios);
    } catch (error) {
      console.error('Error fetching audios:', error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleGenerate = async () => {
    if (selectedOption === 'image' && uploadedFile && audioFile) {
      const formData = new FormData();
      formData.append('image', uploadedFile);
      formData.append('audio', audioFile);

      try {
        const response = await axios.post('http://127.0.0.1:8000/generate_video/', formData, {
          responseType: 'blob',
        });
        const videoBlob = new Blob([response.data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setGeneratedVideo(videoUrl);
      } catch (error) {
        console.error('Error generating video:', error);
      }
    }
  };

  const renderOptionContent = () => {
    if (selectedOption === 'image') {
      return (
        <div className="content-section">
          <div className="content-title">Group of Images</div>
          <div className="content-body images-grid">
            {images.map((image, index) => (
              <img key={index} src={`http://127.0.0.1:8000/images/${image}`} alt={image} />
            ))}
          </div>
          <input type="file" accept="image/*" onChange={handleFileUpload} />
        </div>
      );
    } else if (selectedOption === 'speech') {
      return (
        <div className="content-section">
          <div className="content-title">Group of Voices</div>
          <div className="content-body audio-list">
            {audios.map((audio, index) => (
              <div key={index}>
                <audio controls>
                  <source src={`http://127.0.0.1:8000/audio/${audio}`} type="audio/wav" />
                </audio>
              </div>
            ))}
          </div>
          <input type="file" accept="audio/*" onChange={handleAudioUpload} />
          <button className="content-button">Record</button>
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
            <button className="generate-button" onClick={handleGenerate}>
              Generate
            </button>
          </div>
        </div>
        <div className="generated-video-box">
          <div className="video-title">Generated Video</div>
          <div className="video-content">
            {generatedVideo ? (
              <video controls>
                <source src={generatedVideo} type="video/mp4" />
              </video>
            ) : (
              <div className="video-placeholder">Video will be displayed here</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
