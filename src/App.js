import React from 'react';
import Encabezado from './Componentes/Encabezado';
import ConductorMenu from './Componentes/ConductorMenu';
import ConductorRutaCheck from './Componentes/ConductorRutaCheck'; 
import ConductorBienvenida from './Componentes/ConductorBienvenida';
import InicioSesion from './Componentes/InicioSesion';
import './App.css';

// Opciones de menú para ConductorMenu
const menuItems = [
  { label: 'Inicio', link: '#inicio' },
  { label: 'Iniciar Ruta', link: '#estudiantes' },
  { label: 'Ver Estado de la Ruta', link: '#conductores' },
];

//Conductor
const conductor = {
  nombre: 'Carlos Rivera',
  rol: 'Conductor',
  icono: 'https://cdn-icons-png.flaticon.com/128/1464/1464721.png',
};

//Mapa del estado de la ruta
const mapaRutaSrc = "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d40436.84340917986!2d-78.51848727862183!3d-0.22822196618896437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d-0.25927279999999997!2d-78.5028069!4m5!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL%2C%20Av.%20Ladr%C3%B3n%20de%20Guevara%20E11-253%2C%20Quito%20170143!3m2!1d-0.2124413!2d-78.4905842!5e0!3m2!1ses!2sec!4v1731779175048!5m2!1ses!2sec"

// Lista de paradas para ConductorRutaCheck
const paradas = ['Parada 1', 'Parada 2', 'Parada 3', 'Parada 4', 'Parada 5'];


// Función para manejar la detención de la ruta
const detenerRuta = () => {
  alert('La ruta ha sido detenida.');
};

// Variable para almacenar la imagen
const imagen = '/polibus-logo-500h.png';

const mensaje = 'Bienvenido al Sistema del Transporte Estudiantil';


function App() {
  return (
    <div className="App">
      <div>
        <InicioSesion />
      </div>
      <Encabezado />
      <div className="app-contenido">
        <ConductorMenu
          userName={conductor.nombre}
          userRole={conductor.rol}
          userIcon={conductor.icono}
          menuItems={menuItems}
        />
        <ConductorBienvenida
          mensaje={mensaje}
          imagen={imagen}

        />
      </div>
      <Encabezado />
      <div className="app-contenido">
        <ConductorMenu
          userName={conductor.nombre}
          userRole={conductor.rol}
          userIcon={conductor.icono}
          menuItems={menuItems}
        />
        <ConductorRutaCheck
          titulo="RUTA: CAPULÍ"
          paradas={paradas}
          onBotonClick={detenerRuta}
          mapaSrc={mapaRutaSrc}
        />
      </div>
    </div>
  );
}

export default App;
