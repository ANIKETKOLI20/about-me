import React, { useState, useEffect } from 'react';
import './ImageUploader.css'; // Updated CSS for new layout
import { AiOutlineCloudUpload } from 'react-icons/ai'; // Icon for the Add Image button
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Icons for navigation

function ImageUploader() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3; // Number of images visible at once

  useEffect(() => {
    // Retrieve saved images from localStorage on component mount
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    setImages(savedImages);
  }, []);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          const updatedImages = [...images, ...newImages];
          setImages(updatedImages); // Update state with all images
          localStorage.setItem('uploadedImages', JSON.stringify(updatedImages)); // Save to local storage
        }
      };
      reader.readAsDataURL(file); // Convert image to Base64
    });
  };

  const handleNext = () => {
    if (currentIndex < images.length - imagesPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="image-uploader-container">
      <div className="controls-container">
        <button className="gallery-button">
          Gallery
        </button>
        <button className="add-image-button" onClick={() => document.getElementById('file-input').click()}>
          + Add Image
        </button>
        <div className="slider-buttons">
          <button className="nav-button prev" onClick={handlePrev} disabled={currentIndex === 0}>
            <FiChevronLeft size={24} />
          </button>
          <button className="nav-button next" onClick={handleNext} disabled={currentIndex >= images.length - imagesPerView}>
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        id="file-input"
        onChange={handleImageChange}
        multiple // Allow multiple file selection
        style={{ display: 'none' }}
      />

      {images.length > 0 && (
        <div className="slider-container">
          <div className="image-list">
            {images.slice(currentIndex, currentIndex + imagesPerView).map((image, index) => (
              <img key={index} src={image} alt={`Uploaded ${index}`} className="preview-image" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
