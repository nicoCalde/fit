import React, { useState } from 'react';
import './video-button.css';

import presentacion from '../../assets/vid/BaGastro&Hotel.mp4'

const VideoButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="video-button-container">
      <button className='open-button' onClick={openModal}>Ver Video</button>

      {isModalOpen && (
        <div className="video-modal">
          <iframe
            title="Video"
            width="560"
            height="315"
            src={presentacion}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <button className='close-button' onClick={closeModal}>X</button>
        </div>
      )}
    </div>
  );
};

export default VideoButton;