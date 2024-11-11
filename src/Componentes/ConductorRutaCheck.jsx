import React from 'react';
import PropTypes from 'prop-types';
import './ConductorRutaCheck.css';

const ConductorRutaCheck = ({ titulo, claseContenedor, paradas, onBotonClick, mapaSrc }) => {
  return (
    <div className={`ruta-check ${claseContenedor}`}>
      <h1 className="ruta-titulo">{titulo}</h1>
      <div className="ruta-contenido">
        <div className="paradas-contenedor">
          {paradas.map((parada, index) => (
            <h2 key={index} className="parada">{parada}</h2>
          ))}
          <button className="boton-detener" onClick={onBotonClick}>
            Detener Ruta
          </button>
        </div>
        <iframe
          src={mapaSrc}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mapa-google"
        ></iframe>
      </div>
    </div>
  );
};

ConductorRutaCheck.propTypes = {
  titulo: PropTypes.string,
  claseContenedor: PropTypes.string,
  paradas: PropTypes.arrayOf(PropTypes.string),
  onBotonClick: PropTypes.func,
  mapaSrc: PropTypes.string,
};

ConductorRutaCheck.defaultProps = {
  titulo: 'RUTA: CAPULÍ',
  claseContenedor: '',
  paradas: ['Parada 1', 'Parada 2', 'Parada 3', 'Parada 4', 'Parada 5'],
  onBotonClick: () => alert('La ruta ha sido detenida.'),
  mapaSrc: '',
};

export default ConductorRutaCheck;
