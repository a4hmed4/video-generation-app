import React, { useState, useEffect } from 'react';
import './application.css';
import axios from 'axios';

const Application = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [images, setImages] = useState([]);
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
    fetchAudios();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/list_images/');
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchAudios = async () => {
    try {
      const response = await axios.get('http://localhost:5000/list_audios/');
      setAudios(response.data.audios);
    } catch (error) {
      console.error('Error fetching audios:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/upload_image/', formData);
      setUploadedImage(response.data.image);
      setSelectedImage(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleAudioUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('http://localhost:5000/upload_audio/', formData);
      setUploadedAudio(response.data.audio);
      setSelectedAudio(null);
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  const handleGenerate = async () => {
    if (selectedImage && selectedAudio) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('audio', selectedAudio);

      try {
        setLoading(true);
        const response = await axios.post(
          'http://localhost:5000/generate_video/',
          formData,
          {
            responseType: 'blob',
          }
        );
        const videoBlob = new Blob([response.data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setGeneratedVideo(videoUrl);
        setLoading(false);
      } catch (error) {
        console.error('Error generating video:', error);
        setLoading(false);
      }
    } else {
      alert('Please select both an image and an audio.');
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image === selectedImage ? null : image);
    setUploadedImage(null);
  };

  const handleAudioSelect = (audio) => {
    setSelectedAudio(audio === selectedAudio ? null : audio);
    setUploadedAudio(null);
  };

  return (
    <div className="vga__application section__padding" id="application">
      <div className="content-container">
        <div className="content-box">
          <div className="option-content">
            <div className="content-section">
              <div className="content-title">Select an Image</div>
              <div className="content-body">
                <select
                  value={selectedImage || ''}
                  onChange={(e) => handleImageSelect(e.target.value)}
                >
                  <option value="">Select an image</option>
                  {images.map((image, index) => (
                    <option key={index} value={image}>
                      {image}
                    </option>
                  ))}
                </select>
              </div>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            <div className="content-section">
              <div className="content-title">Select a Voice</div>
              <div className="content-body">
                <select
                  value={selectedAudio || ''}
                  onChange={(e) => handleAudioSelect(e.target.value)}
                >
                  <option value="">Select an audio</option>
                  {audios.map((audio, index) => (
                    <option key={index} value={audio}>
                      {audio}
                    </option>
                  ))}
                </select>
              </div>
              <input type="file" accept="audio/*" onChange={handleAudioUpload} />
            </div>
          </div>
          <div className="generate-button-container">
            <button className="generate-button" onClick={handleGenerate}>
              Generate
            </button>
            {loading && <div className="loader"></div>}
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
