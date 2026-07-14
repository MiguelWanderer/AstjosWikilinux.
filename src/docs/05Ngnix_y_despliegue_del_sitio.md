# Bloque E - Criterio 3.1.4: Validación y Despliegue del Sitio

## Flujo de trabajo: Pruebas y Puesta en Marcha

Para asegurar que el servidor web entregue correctamente los archivos estáticos construidos, se realiza un proceso final de validación en dos pasos. Esto garantiza que no haya errores de sintaxis que puedan provocar una caída del servicio web en producción:

1. **Validación de la configuración:** Antes de reiniciar los servicios, se ejecuta `nginx -t`. Esto analiza la "receta" del sitio ubicada en `/etc/nginx/sites-available/wiki` para asegurar que la estructura y los parámetros sean válidos.
2. **Prueba de despliegue local:** Tras recargar el servicio (`systemctl reload nginx`), se comprueba la conectividad accediendo desde el navegador del sistema host hacia el puerto mapeado (8080).

### 1. Verificación de sintaxis de Nginx (`nginx -t`)
La siguiente captura muestra la ejecución del comando de diagnóstico. La salida confirma que la configuración no tiene errores tipográficos (*"syntax is ok"*) y que la prueba global fue exitosa (*"test is successful"*).

![Evidencia comando nginx -t]()

### 2. Comprobación del sitio servido (`localhost:8080`)
Esta captura representa la **evidencia clave del laboratorio**. Demuestra que Nginx está entregando correctamente los archivos web de la aplicación hacia la máquina host a través de `http://localhost:8080`.

![Evidencia del sitio en localhost]()

---

## Caso Práctico y Desafío: Seguridad y Cifrado del Sitio Web

**Necesidad detectada:** 
Una vez desplegado el sitio web en el puerto 80 (HTTP), se detecta la necesidad de proteger el tráfico de red mediante cifrado, asegurando que la información transferida entre el cliente y el servidor no pueda ser interceptada (Man-in-the-Middle).

**Análisis de Alternativas de Despliegue:**

*   **Alternativa 1: HTTP Estándar (Puerto 80)**
    *   *Implementación:* Nginx configurado por defecto.
    *   *Factibilidad:* Alta y rápida, pero nula en seguridad. El tráfico viaja en texto plano, lo que hoy en día es penalizado por los navegadores modernos y supone un riesgo crítico.
*   **Alternativa 2: HTTPS con Certificado Autofirmado (OpenSSL)**
    *   *Implementación:* Generación de claves locales mediante la consola de Linux.
    *   *Factibilidad:* Media. Proporciona cifrado real, pero los navegadores mostrarán una alerta de "Sitio no seguro" porque la autoridad certificadora no es reconocida (somos nosotros mismos). Ideal solo para pruebas internas.
*   **Alternativa 3: HTTPS con Let's Encrypt y Certbot**
    *   *Implementación:* Requiere un nombre de dominio real apuntando a la IP pública del servidor e instalar el paquete `certbot` junto con su plugin para Nginx (`sudo apt install certbot python3-certbot-nginx`).
    *   *Factibilidad:* Excelente. Es el estándar de la industria. Proporciona un certificado SSL/TLS de grado de producción, gratuito, emitido por una autoridad reconocida mundialmente y de renovación automática.

**Justificación y Documentación del Intento (Desafío):**

Para un entorno de producción, la **Alternativa 3 (Certbot)** es la única viable. Para lograrlo, el servidor Linux debe estar expuesto a internet y contar con un dominio válido. El comando `sudo certbot --nginx -d midominio.com` se encargaría de leer la receta en `sites-available`, emitir el certificado y modificar el archivo automáticamente para escuchar en el puerto 443. 

*(Opcional: Si lograste hacer este desafío o probarlo en alguna máquina, reemplaza este texto con tu captura de Certbot instalando el certificado).*