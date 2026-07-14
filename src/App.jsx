// MechanicusConsole.jsx (o App.jsx dependiendo de tu enrutador)
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import './Engranajes.css';
import { mechanicusLore } from './mechanicusLore';
import softwareLibreMd from './docs/01Software_libre_y_licencias.md?raw';
import instalacionBasicaMd from './docs/02Instalacion_y-configuracion_basica.md?raw';
import permisosporlineadecomandos from './docs/03Permisos_por_linea_de_comandos.md?raw';

// Componente de los Engranajes de Fondo
const EngranajesBackground = () => {
  return (
    <div className="sacred-cogs-container">
      {/* Engranaje Grande */}
      <svg className="cog-svg cog-large" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Dientes del engranaje (simulados con stroke-dasharray) */}
        <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
        {/* Anillo exterior */}
        <circle cx="50" cy="50" r="30" />
        {/* Eje central */}
        <circle cx="50" cy="50" r="10" />
        {/* Rayos/Radios cruzados */}
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="50" x2="90" y2="50" />
      </svg>
      
      {/* Engranaje Pequeño */}
      <svg className="cog-svg cog-small" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" strokeDasharray="8 4" />
        <circle cx="50" cy="50" r="20" />
        {/* Forma interior más mecánica */}
        <path d="M 50 5 L 50 25 M 50 95 L 50 75 M 5 50 L 25 50 M 95 50 L 75 50" />
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
              <div className="markdown-document">
                <ReactMarkdown>{softwareLibreMd}</ReactMarkdown>
              </div>
            </section>
          ) : activeRitual === 'instalacion' ? (
            <section>
              <p>------------- [ARCHIVO_SECUNDARIO // DECODIFICANDO_ENGRAMAS] -------------</p>
              <div className="markdown-document">
                <ReactMarkdown>{instalacionBasicaMd}</ReactMarkdown>
              </div>
            </section>
          ) : activeRitual === 'permisos' ? (
            <section>
              <p>------------- [ARCHIVO_TERCERARIO // DECODIFICANDO_ENGRAMAS] -------------</p>
              <div className="markdown-document">
                <ReactMarkdown>{permisosporlineadecomandos}</ReactMarkdown>
              </div>
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
  );
};

export default MechanicusConsole;