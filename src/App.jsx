// MechanicusConsole.jsx
import React, { useState } from 'react';
import './App.css';
import { mechanicusLore } from './mechanicusLore';
import softwareLibreMd from './docs/01Software_libre_y_licencias.md?raw';
import instalacionBasicaMd from './docs/02Instalacion_y-configuracion_basica.md?raw';

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
              <p>------------- [ARCHIVO_PRIMARIO // TEXTO_EN_BRUTO] -------------</p>
              <pre className="markdown-document">{softwareLibreMd}</pre>
            </section>
          ) : activeRitual === 'instalacion' ? (
            <section>
              <p>------------- [ARCHIVO_SECUNDARIO // TEXTO_EN_BRUTO] -------------</p>
              <pre className="markdown-document">{instalacionBasicaMd}</pre>
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