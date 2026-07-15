import { useState } from 'react';
import './App.css';
import { mechanicusLore } from './mechanicusLore';
import {
  SoftwareLibreLicencias,
  InstalacionBasica,
  PermisosComandos,
  GestoresPaquetes,
  NginxDespliegue,
} from './components/docs';

// Componente de los Engranajes de Fondo (Versión Blindada contra Desplazamiento)
const EngranajesBackground = () => {
  return (
    <div 
      className="sacred-cogs-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, /* Asegura que vaya al fondo del todo, DETRÁS del contenido */
        pointerEvents: 'none',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        display: 'block'
      }}
    >
      {/* Engranaje Grande */}
      <svg 
        className="cog-svg cog-large" 
        viewBox="-100 -100 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ff8a00" 
        strokeWidth="1.5" 
        fill="none"
        style={{ position: 'absolute' }}
      >
        {/* Generador de 16 Dientes Trapezoidales */}
        {[...Array(16)].map((_, i) => (
          <g key={`tooth-large-${i}`} transform={`rotate(${i * 22.5})`}>
            <path d="M -10,-95 L 10,-95 L 14,-80 L -14,-80 Z" strokeWidth="2" />
            <line x1="0" y1="-80" x2="0" y2="-55" />
          </g>
        ))}
        
        {/* Anillos Estructurales */}
        <circle cx="0" cy="0" r="80" strokeWidth="2" />
        <circle cx="0" cy="0" r="72" strokeDasharray="6 6" />
        <circle cx="0" cy="0" r="55" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="25" strokeWidth="3" />
        
        {/* Remaches y Núcleo Sagrado */}
        <circle cx="0" cy="0" r="6" fill="#ff8a00" />
        {[...Array(8)].map((_, i) => (
          <circle 
            key={`rivet-${i}`} 
            cx={Math.cos(i * 45 * Math.PI / 180) * 40} 
            cy={Math.sin(i * 45 * Math.PI / 180) * 40} 
            r="3" 
            fill="#ff8a00" 
            stroke="none"
          />
        ))}
      </svg>
      
      {/* Engranaje Pequeño */}
      <svg 
        className="cog-svg cog-small" 
        viewBox="-100 -100 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ff8a00" 
        strokeWidth="2" 
        fill="none"
        style={{ position: 'absolute' }}
      >
        {/* Generador de 8 Dientes Dentados de Sierra */}
        {[...Array(8)].map((_, i) => (
          <g key={`tooth-small-${i}`} transform={`rotate(${i * 45})`}>
            <path d="M -16,-90 L 16,-90 L 22,-65 L -22,-65 Z" />
            {/* Radios en forma de Chevron (V) */}
            <path d="M 0,-65 L 18,-30 L -18,-30 Z" strokeWidth="1" />
          </g>
        ))}

        {/* Anillos Interiores de Alta Densidad */}
        <circle cx="0" cy="0" r="65" strokeWidth="3" strokeDasharray="15 5" />
        <circle cx="0" cy="0" r="50" />
        <circle cx="0" cy="0" r="30" strokeWidth="1" />
        <circle cx="0" cy="0" r="14" strokeWidth="3" />
        
        {/* Runa Central de Bloqueo */}
        <rect x="-6" y="-6" width="12" height="12" fill="#ff8a00" />
        <line x1="-14" y1="-14" x2="14" y2="14" />
        <line x1="14" y1="-14" x2="-14" y2="14" />
      </svg>
    </div>
  );
};

// Componente Principal de la Consola
const MechanicusConsole = () => {
  // Estado para simular la navegación entre los tomos de conocimiento
  const [activeRitual, setActiveRitual] = useState('software-libre');

  const activeDoc = mechanicusLore.docRituals[activeRitual];

  return (
    <>
      {/* Los engranajes ahora están blindados en línea y con posición absoluta/fija garantizada */}
      <EngranajesBackground />
      
      <div className="cogitator-container">
        {/* Cabecera del Cogitador */}
        <header className="cogitator-header">
          {mechanicusLore.header}
        </header>

        <div className="cogitator-body">
          {/* Barra Lateral / Índice */}
          <nav className="sacred-index">
            <div className="section-title">[ÍNDICE_SAGRADO // ARCHIVUM_OMNISSIAH]</div>
            <ul>
              {mechanicusLore.sacredDocs.map((doc) => (
                <li
                  key={doc.id}
                  className={activeRitual === doc.id ? 'active' : ''}
                  onClick={() => setActiveRitual(doc.id)}
                >
                  <span className="sacred-index-sigil">{doc.sigil}</span>
                  {doc.label}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contenido Principal */}
          <main className="data-vault">
            <div className="section-title">
              {mechanicusLore.introTitle}
            </div>
            
            <p>{mechanicusLore.introProtocol}</p>
            <br/>
            <p>
              {mechanicusLore.introText}
            </p>
            <br/>
            <p>{mechanicusLore.machineLitany}</p>
            <br/>

            {/* Renderizado condicional basado en la navegación */}
            {activeRitual === 'software-libre' ? (
              <section>
                <p>------------- [ARCHIVO_PRIMARIO // DECODIFICANDO_ENGRAMAS] -------------</p>
                <SoftwareLibreLicencias />
              </section>
            ) : activeRitual === 'instalacion' ? (
              <section>
                <p>------------- [ARCHIVO_SECUNDARIO // DECODIFICANDO_ENGRAMAS] -------------</p>
                <InstalacionBasica />
              </section>
            ) : activeRitual === 'permisos' ? (
              <section>
                <p>------------- [ARCHIVO_TERCERARIO // DECODIFICANDO_ENGRAMAS] -------------</p>
                <PermisosComandos />
              </section>
            ) : activeRitual === 'gestores-paquetes' ? (
              <section>
                <p>------------- [ARCHIVO_CUARTO // DECODIFICANDO_ENGRAMAS] -------------</p>
                <GestoresPaquetes />
              </section>
            ) : activeRitual === 'ngnix-despliegue' ? (
              <section>
                <p>------------- [ARCHIVO_QUINTO // DECODIFICANDO_ENGRAMAS] -------------</p>
                <NginxDespliegue />
              </section>
            ) : activeDoc ? (
              <section>
                <p>------------- [{activeDoc.title}] -------------</p>
                {activeDoc.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ) : null}

            <div className="machine-spirit-warning">
              {mechanicusLore.warning}
              <br/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MechanicusConsole;