import React from 'react';
import VideoButton from '../components/video-button/VideoButton';

import '../assets/style/home.css';
import logoA from '../assets/img/logo-AHRCC.png';
import logoB from '../assets/img/logo-ISEHG.png';

const Home = () => {;
  return (
    <div className='home-container'>
        <div className="top-left-image">
            <img src={logoA} alt="AHRCC" />
            <img src={logoB} alt="AHRCC" />
        </div>
        <div className="flex-container">
            <div className="text-container">
                <div className="subtitle-container">Descarga imágenes y videos exclusivos.</div>
                <div className="title-container">AHRCC e ISEHG en Foco.</div>
            </div>
            <div className="button-container">
                <VideoButton />
            </div>
        </div>
    </div>
  );
}

export default Home;