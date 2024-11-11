import React from 'react';
import './InicioSesion.css';

const InicioSesion = () => {
  return (
    <div className="inicio-sesion-contenedor">
      <div className="inicio-sesion-max-ancho">
        {/* Sección Izquierda */}
        <div className="inicio-sesion-logo">
          <img
            src="https://ici2st.epn.edu.ec/eventosAnteriores/ICI2ST2023/images/ici2st2023/Logo_EPN.png"
            alt="Logo EPN"
            className="inicio-sesion-logo-epn"
          />
          <h2 className="inicio-sesion-titulo-principal">
            SISTEMA DE TRANSPORTE ESTUDIANTIL
          </h2>
          <img
            src="/polibus-logo-500h.png"
            alt="Icono Transporte"
            className="inicio-sesion-logo-secundario"
          />
        </div>

        {/* Sección Derecha */}
        <div className="inicio-sesion-formulario">
          <h2 className="inicio-sesion-titulo">Iniciar Sesión</h2>
          <form className="inicio-sesion-campos">
            <div className="inicio-sesion-campo">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                id="email"
                placeholder="alguien@example.com"
                required
                className="inicio-sesion-input"
              />
            </div>
            <div className="inicio-sesion-campo">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                required
                className="inicio-sesion-input"
              />
            </div>
            <button type="submit" className="inicio-sesion-boton">Ingresar</button>
          </form>
          <p className="inicio-sesion-registro">
            ¿No estás registrado? <span className="inicio-sesion-link">Regístrate</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;