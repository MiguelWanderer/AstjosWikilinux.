// MechanicusConsole.jsx
import React, { useState } from 'react';
import './App.css';

const MechanicusConsole = () => {
  // Estado para simular la navegación entre los tomos de conocimiento
  const [activeRitual, setActiveRitual] = useState('estructura');

  const sacredDocs = [
    { id: 'software-libre', label: '01Software_libre_y_licencias' },
    { id: 'instalacion', label: '02Instalacion_y-configuracion_basica' },
    { id: 'permisos', label: '03Permisos_por_linea_de_comandos' },
    { id: 'gestores-paquetes', label: '04Gestores_de_paquetes' },
    { id: 'ngnix', label: '05Ngnix_y_despliegue_del_sitio' },
  ];

  return (
    <div className="cogitator-container">
      {/* Cabecera del Cogitador */}
      <header className="cogitator-header">
        [ADEPTUS MECHANICUS // COGITATOR UNIT.78 // DATA-VAULT 40K]
      </header>

      <div className="cogitator-body">
        {/* Barra Lateral / Índice */}
        <nav className="sacred-index">
          <div className="section-title">ÍNDICE_SAGRADO [INDEX]</div>
          <ul>
            {sacredDocs.map((doc) => (
              <li key={doc.id} onClick={() => setActiveRitual(doc.id)}>
                {doc.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenido Principal */}
        <main className="data-vault">
          <div className="section-title">
            [WIKI // INTRODUCCIÓN AL SERVIDOR LINUX // OPERACIÓN DEL ESPÍRITU DE LA MÁQUINA]
          </div>
          
          <p>[PROTOCOLO 34.7: KNOWLEDGE-VAULT 113 // INITIATED BY TECH-PRIEST]</p>
          <br/>
          <p>
            Bienvenido, Iniciado. El Servidor Linux es la base del Conocimiento Sagrado. 
            Este Cogitador archiva la sabiduría necesaria para la correcta administración y 
            rituales del sistema.
          </p>
          <br/>

          {/* Renderizado condicional basado en la navegación */}
          {activeRitual === 'estructura' && (
            <section>
              <p>------------- [ESTRUCTURA DEL SISTEMA] -------------</p>
              <p>
                <strong>1. El Kernel [Núcleo]:</strong> El núcleo gestiona el hardware, 
                asigna recursos y obedece al Omnissiah.
              </p>
              <br/>
              <p>
                <strong>2. El Sistema de Archivos:</strong> La jerarquía sagrada (/root, 
                /etc, /var) que organiza la data inmaculada.
              </p>
            </section>
          )}

          {activeRitual === 'comandos' && (
            <section>
               <p>------------- [CÁNTICOS DE TERMINAL] -------------</p>
               <p>
                 &gt; COMANDOS CLAVE: <code>top</code>, <code>htop</code>, <code>dmesg</code>, <code>systemctl</code>, <code>ls</code>, <code>cd</code>, <code>cat</code>
               </p>
            </section>
          )}

          <div className="machine-spirit-warning">
            ------------- [EL ESPÍRITU DE LA MÁQUINA] -------------
            <br/>
            Siga los protocolos de mantenimiento. El error es fracaso. La lógica es pura.
          </div>
        </main>
      </div>
    </div>
  );
};

export default MechanicusConsole;