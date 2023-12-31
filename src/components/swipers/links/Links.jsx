import React from 'react';
import mapa from '../../../assets/img/links/MapaInteractivo.png';
import hoteles from '../../../assets/img/links/CamaraHoteles.png';
import cafes from '../../../assets/img/links/CamaraCafes.png';
import restaurantes from '../../../assets/img/links/CamaraRestaurantes.png';
import confirerias from '../../../assets/img/links/CamaraConfiterias.png';

import './links.css'

const Links = () => {
  return (
    <div className="links-container">
        <a href="https://nicocalde.github.io/mapai" target="_blank" rel="noopener noreferrer">
            <img src={mapa} alt="Mapa Interactivo" />
            <h2>Mapa Interactivo</h2>
        </a>
        <a href="https://www.ahrcc.org.ar/camara-de-hoteles" target="_blank" rel="noopener noreferrer">
            <img src={hoteles} alt="Cámara de Hoteles" />
            <h2>Cámara de Hoteles</h2>
        </a>
        <a href="https://www.ahrcc.org.ar/camara-de-cafes" target="_blank" rel="noopener noreferrer">
            <img src={cafes} alt="Cámara de Cafés" />
            <h2>Cámara de Cafés</h2>
        </a>
        <a href="https://www.ahrcc.org.ar/camara-de-restaurantes" target="_blank" rel="noopener noreferrer">
            <img src={restaurantes} alt="Cámara de Restaurantes" />
            <h2>Cámara de Restaurantes</h2>
        </a>
        <a href="https://www.ahrcc.org.ar/camara-de-confiterias" target="_blank" rel="noopener noreferrer">
            <img src={confirerias} alt="Cámara de Confiterías" />
            <h2>Cámara de Confiterias</h2>
        </a>
    </div>
  );
};

export default Links;