import React from 'react';
import gestion from '../../../assets/vid/isegh/1.GestiónDeFrontOffice.mp4';
import cocina from '../../../assets/vid/isegh/2.CocinaProfesional.mp4';
import bartender from '../../../assets/vid/isegh/3.Bartender.mp4';
import pasteleria from '../../../assets/vid/isegh/4.Pasteleria.mp4';

import './styles.css'

const AhrccVideos = () => {
  return (
    <div className="video-container">
        <iframe title='1' src={gestion} frameborder="0" allowFullScreen controls></iframe>
        <iframe title='2' src={cocina} frameborder="0" allowFullScreen controls></iframe>
        <iframe title='3' src={bartender} frameborder="0" allowFullScreen controls></iframe>
        <iframe title='4' src={pasteleria} frameborder="0" allowFullScreen controls></iframe>
    </div>
  );
};

export default AhrccVideos;