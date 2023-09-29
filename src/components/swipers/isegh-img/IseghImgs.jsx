import React from 'react';
import one from '../../../assets/img/isegh/BARISTA PROFESIONAL.jpg';
import two from '../../../assets/img/isegh/BARTENDER 1.jpg';
import three from '../../../assets/img/isegh/BARTENDER 2.jpg';
import four from '../../../assets/img/isegh/BARTENDER 3.jpg';
import five from '../../../assets/img/isegh/COCINA PROFESIONAL.jpg';
import six from '../../../assets/img/isegh/ESPECIALIZACIÓN EN TÉCNICAS AVANZADAS DE COCINA.jpg';
import seven from '../../../assets/img/isegh/GERENCIAMIENTO DE HOUSE KEEPING.jpg';
import eight from '../../../assets/img/isegh/GESTIÓN DE ESTABLECIMIENTOS GASTRONÓMICOS.jpg';
import nine from '../../../assets/img/isegh/GESTIÓN DE FRONT OFFICE.jpg';
import ten from '../../../assets/img/isegh/GESTIÓN Y OPERACIÓN DE BAR - CAFETERÍA (REHACER).jpg';
import eleven from '../../../assets/img/isegh/GESTIÓN Y OPERACIÓN DE BAR - CAFETERÍA.jpg';
import twelve from '../../../assets/img/isegh/PANADERÍA PROFESIONAL.jpg';
import thirteen from '../../../assets/img/isegh/PASTELERIA PROFESIONAL 1.jpg';
import fourteen from '../../../assets/img/isegh/PASTELERIA PROFESIONAL 2.jpg';
import fifteen from '../../../assets/img/isegh/TECNICATURA SUPERIOR EN GESTIÓN HOTELERA (2).jpg';
import sixteen from '../../../assets/img/isegh/TECNICATURA SUPERIOR EN GESTIÓN HOTELERA.jpg';


import './isegh-imgs.css'

const IseghImgs = () => {
  return (
    <div className="imgs-container">
        <img src={one} alt="Barista Profesional" />
        <img src={two} alt="Bartender 1" />
        <img src={three} alt="Bartender 2" />
        <img src={four} alt="Bartender 3" />
        <img src={five} alt="Cocina Profesional" />
        <img src={six} alt="Especialización Cocina" />
        <img src={seven} alt="House Keeping" />
        <img src={eight} alt="Gestión de Establecimientos" />
        <img src={nine} alt="Front Office" />
        <img src={ten} alt="Gestión y Operación de Bar y Café" />
        <img src={eleven} alt="Gestión y Operación de Bar y Café" />
        <img src={twelve} alt="Panadería Profesional" />
        <img src={thirteen} alt="Pastelería Profesional 1" />
        <img src={fourteen} alt="Pastelería Profesional 2" />
        <img src={fifteen} alt="Gestión Hotelera" />
        <img src={sixteen} alt="Gestión Hotelera" />
    </div>
  );
};

export default IseghImgs;