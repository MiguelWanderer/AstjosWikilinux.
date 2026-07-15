const imgAptShow = '/img/ITEM D/Captura de pantalla 2026-07-13 170006.png';
const imgAptInstall = '/img/ITEM D/Captura de pantalla 2026-07-13 170253.png';

const GestoresPaquetes = () => {
  return (
    <div className="markdown-document">
      <h1>Bloque D - Gestión de Paquetes y Servicios</h1>

      <h2>Flujo de trabajo: Instalación y Monitoreo de Servicios</h2>
      <p>
        Para la correcta implementación del servidor web, se siguió un flujo de trabajo secuencial
        estándar en Linux, utilizando el gestor de paquetes APT y el administrador de servicios{' '}
        <code>systemd</code>:
      </p>
      <ol>
        <li>
          <strong>Consulta de información:</strong> Primero, se utiliza el comando{' '}
          <code>apt show</code> para consultar los repositorios del sistema y revisar los detalles
          técnicos del paquete (versión, tamaño, dependencias) antes de proceder.
        </li>
        <li>
          <strong>Instalación del paquete:</strong> Una vez confirmada la información, se procede
          con la descarga e instalación en el sistema utilizando <code>sudo apt install</code>.
        </li>
      </ol>
      <p>A continuación, se presentan las evidencias de este flujo de trabajo:</p>

      <h3>
        1. Gestión de paquetes (<code>apt show</code> / <code>apt install</code>)
      </h3>
      <p>
        La siguiente captura demuestra la fase inicial del flujo, evidenciando el uso del gestor
        de paquetes para consultar la información de Nginx o ejecutar su instalación en el
        sistema.
      </p>
      <img src={imgAptShow} alt="Evidencia comando apt" />
      <img src={imgAptInstall} alt="Evidencia de comando apt install" />

      <h3>Caso Práctico: Selección e Instalación de un Editor de Texto Avanzado</h3>

      <p>
        <strong>Necesidad detectada:</strong>
      </p>
      <p>
        Se requiere un editor de texto en terminal más robusto que el predeterminado para editar
        archivos de configuración extensos (como los de Nginx o código de la aplicación), que
        ofrezca resaltado de sintaxis avanzado y atajos eficientes.
      </p>

      <p>
        <strong>Análisis de Alternativas:</strong>
      </p>
      <ul>
        <li>
          <strong>Alternativa 1: <code>nano</code></strong>
          <ul>
            <li>
              <em>Peso y Dependencias:</em> Preinstalado. Cero consumo adicional.
            </li>
            <li>
              <em>Soporte:</em> Universal en Linux.
            </li>
            <li>
              <em>Factibilidad:</em> Muy básica. Carece de funciones avanzadas de búsqueda y
              reemplazo masivo, múltiples buffers o un resaltado de sintaxis complejo, lo que hace
              lenta la edición de archivos de configuración largos.
            </li>
          </ul>
        </li>
        <li>
          <strong>Alternativa 2: <code>vim</code></strong>
          <ul>
            <li>
              <em>Peso y Dependencias:</em> Extremadamente ligero (menos de 5 MB). Sin
              dependencias gráficas, requiere únicamente librerías base del sistema.
            </li>
            <li>
              <em>Soporte:</em> Es el estándar de la industria para administración de servidores.
              Disponible en los repositorios principales.
            </li>
            <li>
              <em>Factibilidad:</em> Alta. Aunque tiene una curva de aprendizaje inicial, su
              consumo de recursos es mínimo y su eficiencia para editar código en servidores sin
              entorno gráfico es insuperable.
            </li>
          </ul>
        </li>
        <li>
          <strong>Alternativa 3: <code>emacs</code></strong>
          <ul>
            <li>
              <em>Peso y Dependencias:</em> Bastante más pesado (puede superar los 50 MB
              dependiendo de los paquetes). A menudo arrastra dependencias adicionales o librerías
              que no son necesarias en un servidor sin interfaz gráfica.
            </li>
            <li>
              <em>Soporte:</em> Excelente y extensible, pero enfocado a ser casi un "sistema
              operativo" propio.
            </li>
            <li>
              <em>Factibilidad:</em> Baja. Excede la necesidad de un servidor web minimalista donde
              solo se busca modificar archivos de configuración de forma esporádica y rápida.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        <strong>Justificación de la Elección (<code>vim</code>):</strong>
      </p>
      <p>
        Bajo un criterio de factibilidad y optimización de recursos, se optó por instalar{' '}
        <strong>
          <code>vim</code>
        </strong>{' '}
        (ejecutando <code>sudo apt install vim</code>). Proporciona una mejora significativa en la
        productividad frente a <code>nano</code>, permitiendo una edición rápida y segura de los
        archivos en <code>/etc/nginx/</code>, pero manteniendo la filosofía de un servidor ligero
        al no incorporar el peso ni las dependencias excesivas que exige <code>emacs</code>.
      </p>
    </div>
  );
};

export default GestoresPaquetes;
