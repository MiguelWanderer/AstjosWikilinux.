const imgLsL = 'img/ITEM C/Captura de pantalla 2026-07-13 165227.png';
const imgChown = 'img/ITEM C/Captura de pantalla 2026-07-13 165321.png';
const imgLsLd = 'img/ITEM C/Captura de pantalla 2026-07-13 165918.png';
const imgComplementaria1 = 'img/ITEM C/Captura de pantalla 2026-07-13 165406.png';
const imgComplementaria2 = 'img/ITEM C/Captura de pantalla 2026-07-13 165928.png';

const PermisosComandos = () => {
  return (
    <div className="markdown-document">
      <h1>Bloque C - Criterio: Permisos y Propiedad</h1>
      <p>
        A continuación se presentan las evidencias de la gestión de permisos de archivos y
        directorios en el servidor Linux, correspondientes al Bloque C.
      </p>

      <h2>
        1. Listado detallado de archivos (<code>ls -l</code>)
      </h2>
      <p>
        La siguiente captura muestra la ejecución del comando <code>ls -l</code>, evidenciando la
        estructura de permisos, propietario, grupo y tamaño de los archivos del directorio de
        trabajo.
      </p>
      <img src={imgLsL} alt="Evidencia comando ls -l" />

      <h2>
        2. Modificación de propiedad y permisos (<code>chown</code> / <code>chmod</code>)
      </h2>
      <p>
        En esta captura se demuestra la asignación correcta de propiedad o permisos. Se aplicó el
        comando correspondiente para asegurar que el servicio web tenga los accesos necesarios.
      </p>
      <img src={imgChown} alt="Evidencia comando chown o chmod" />

      <h2>
        3. Visualización de permiso especial (<code>ls -ld</code>)
      </h2>
      <p>
        Aquí se muestra la salida del comando <code>ls -ld</code> comprobando la existencia de un
        permiso especial en el sistema (por ejemplo, el <em>Sticky Bit</em> en el directorio{' '}
        <code>/tmp</code>, indicado por la letra 't').
      </p>
      <img src={imgLsLd} alt="Evidencia permiso especial ls -ld" />

      <h2>Anexo cronológico de capturas</h2>
      <p>
        Las siguientes evidencias complementan el proceso y se mantienen en el orden en que fueron
        creadas.
      </p>
      <img src={imgComplementaria1} alt="Evidencia complementaria 1" />
      <img src={imgComplementaria2} alt="Evidencia complementaria 2" />
    </div>
  );
};

export default PermisosComandos;
