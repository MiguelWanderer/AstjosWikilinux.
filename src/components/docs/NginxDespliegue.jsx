const imgNginxT = 'img/ITEM E/Captura de pantalla 2026-07-13 170341.png';
const imgLocalhost = 'img/ITEM E/Captura de pantalla 2026-07-13 170345.png';

const evidenciasItemE = [
  '/img/ITEM E/Captura de pantalla 2026-07-13 175709.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 175913.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 180254.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 180443.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 180605.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 181542.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 181627.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 182344.png',
  '/img/ITEM E/Captura de pantalla 2026-07-13 182519.png',
];

const NginxDespliegue = () => {
  return (
    <div className="markdown-document">
      <h1>Bloque E - Criterio 3.1.4: Validación y Despliegue del Sitio</h1>

      <h2>Flujo de trabajo: Pruebas y Puesta en Marcha</h2>
      <p>
        Para asegurar que el servidor web entregue correctamente los archivos estáticos
        construidos, se realiza un proceso final de validación en dos pasos. Esto garantiza que no
        haya errores de sintaxis que puedan provocar una caída del servicio web en producción:
      </p>
      <ol>
        <li>
          <strong>Validación de la configuración:</strong> Antes de reiniciar los servicios, se
          ejecuta <code>nginx -t</code>. Esto analiza la "receta" del sitio ubicada en{' '}
          <code>/etc/nginx/sites-available/wiki</code> para asegurar que la estructura y los
          parámetros sean válidos.
        </li>
        <li>
          <strong>Prueba de despliegue local:</strong> Tras recargar el servicio (
          <code>systemctl reload nginx</code>), se comprueba la conectividad accediendo desde el
          navegador del sistema host hacia el puerto mapeado (8080).
        </li>
      </ol>

      <h3>
        1. Verificación de sintaxis de Nginx (<code>nginx -t</code>)
      </h3>
      <p>
        La siguiente captura muestra la ejecución del comando de diagnóstico. La salida confirma
        que la configuración no tiene errores tipográficos ("syntax is ok") y que la prueba global
        fue exitosa ("test is successful").
      </p>
      <img src={imgNginxT} alt="Evidencia comando nginx -t" />

      <h3>
        2. Comprobación del sitio servido (<code>localhost:8080</code>)
      </h3>
      <p>
        Esta captura representa la <strong>evidencia clave del laboratorio</strong>. Demuestra que
        Nginx está entregando correctamente los archivos web de la aplicación hacia la máquina
        host a través de <code>http://localhost:8080</code>.
      </p>
      <img src={imgLocalhost} alt="Evidencia del sitio en localhost" />

      <hr />

      <h2>Caso Práctico y Desafío: Seguridad y Cifrado del Sitio Web</h2>

      <p>
        <strong>Necesidad detectada:</strong>
      </p>
      <p>
        Una vez desplegado el sitio web en el puerto 80 (HTTP), se detecta la necesidad de proteger
        el tráfico de red mediante cifrado, asegurando que la información transferida entre el
        cliente y el servidor no pueda ser interceptada (Man-in-the-Middle).
      </p>

      <p>
        <strong>Análisis de Alternativas de Despliegue:</strong>
      </p>
      <ul>
        <li>
          <strong>Alternativa 1: HTTP Estándar (Puerto 80)</strong>
          <ul>
            <li>
              <em>Implementación:</em> Nginx configurado por defecto.
            </li>
            <li>
              <em>Factibilidad:</em> Alta y rápida, pero nula en seguridad. El tráfico viaja en
              texto plano, lo que hoy en día es penalizado por los navegadores modernos y supone
              un riesgo crítico.
            </li>
          </ul>
        </li>
        <li>
          <strong>Alternativa 2: HTTPS con Certificado Autofirmado (OpenSSL)</strong>
          <ul>
            <li>
              <em>Implementación:</em> Generación de claves locales mediante la consola de Linux.
            </li>
            <li>
              <em>Factibilidad:</em> Media. Proporciona cifrado real, pero los navegadores
              mostrarán una alerta de "Sitio no seguro" porque la autoridad certificadora no es
              reconocida (somos nosotros mismos). Ideal solo para pruebas internas.
            </li>
          </ul>
        </li>
        <li>
          <strong>Alternativa 3: HTTPS con Let's Encrypt y Certbot</strong>
          <ul>
            <li>
              <em>Implementación:</em> Requiere un nombre de dominio real apuntando a la IP pública
              del servidor e instalar el paquete <code>certbot</code> junto con su plugin para
              Nginx (<code>sudo apt install certbot python3-certbot-nginx</code>).
            </li>
            <li>
              <em>Factibilidad:</em> Excelente. Es el estándar de la industria. Proporciona un
              certificado SSL/TLS de grado de producción, gratuito, emitido por una autoridad
              reconocida mundialmente y de renovación automática.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        <strong>Justificación y Documentación del Intento (Desafío):</strong>
      </p>
      <p>
        Para un entorno de producción, la <strong>Alternativa 3 (Certbot)</strong> es la única
        viable. Para lograrlo, el servidor Linux debe estar expuesto a internet y contar con un
        dominio válido. El comando <code>sudo certbot --nginx -d midominio.com</code> se encargaría
        de leer la receta en <code>sites-available</code>, emitir el certificado y modificar el
        archivo automáticamente para escuchar en el puerto 443.
      </p>
      <p>
        <em>
          (Opcional: Si lograste hacer este desafío o probarlo en alguna máquina, reemplaza este
          texto con tu captura de Certbot instalando el certificado).
        </em>
      </p>

      <h2>Evidencias adicionales</h2>
      <p>Resto de capturas del proceso, en el orden en que fueron creadas.</p>
      {evidenciasItemE.map((src, index) => (
        <img key={src} src={src} alt={`Evidencia despliegue Nginx ${index + 1}`} />
      ))}
    </div>
  );
};

export default NginxDespliegue;
