# Bloque D - Gestión de Paquetes y Servicios

## Flujo de trabajo: Instalación y Monitoreo de Servicios
Para la correcta implementación del servidor web, se siguió un flujo de trabajo secuencial estándar en Linux, utilizando el gestor de paquetes APT y el administrador de servicios `systemd`:

1. **Consulta de información:** Primero, se utiliza el comando `apt show` para consultar los repositorios del sistema y revisar los detalles técnicos del paquete (versión, tamaño, dependencias) antes de proceder.
2. **Instalación del paquete:** Una vez confirmada la información, se procede con la descarga e instalación en el sistema utilizando `sudo apt install`.

A continuación, se presentan las evidencias de este flujo de trabajo:

### 1. Gestión de paquetes (`apt show` / `apt install`)
La siguiente captura demuestra la fase inicial del flujo, evidenciando el uso del gestor de paquetes para consultar la información de Nginx o ejecutar su instalación en el sistema.

![Evidencia comando apt](..assets/img/ITEM_D/Captura_de_pantalla_2026-07-13_170006.png)
![Evidencia de comando apt install ](..assets/img/ITEM_D/Captura_de_pantalla_2026-07-13_170253.png)

### Caso Práctico: Selección e Instalación de un Editor de Texto Avanzado

**Necesidad detectada:** 
Se requiere un editor de texto en terminal más robusto que el predeterminado para editar archivos de configuración extensos (como los de Nginx o código de la aplicación), que ofrezca resaltado de sintaxis avanzado y atajos eficientes.

**Análisis de Alternativas:**

*   **Alternativa 1: `nano`**
    *   *Peso y Dependencias:* Preinstalado. Cero consumo adicional.
    *   *Soporte:* Universal en Linux.
    *   *Factibilidad:* Muy básica. Carece de funciones avanzadas de búsqueda y reemplazo masivo, múltiples buffers o un resaltado de sintaxis complejo, lo que hace lenta la edición de archivos de configuración largos.

*   **Alternativa 2: `vim`**
    *   *Peso y Dependencias:* Extremadamente ligero (menos de 5 MB). Sin dependencias gráficas, requiere únicamente librerías base del sistema.
    *   *Soporte:* Es el estándar de la industria para administración de servidores. Disponible en los repositorios principales.
    *   *Factibilidad:* Alta. Aunque tiene una curva de aprendizaje inicial, su consumo de recursos es mínimo y su eficiencia para editar código en servidores sin entorno gráfico es insuperable.

*   **Alternativa 3: `emacs`**
    *   *Peso y Dependencias:* Bastante más pesado (puede superar los 50 MB dependiendo de los paquetes). A menudo arrastra dependencias adicionales o librerías que no son necesarias en un servidor sin interfaz gráfica.
    *   *Soporte:* Excelente y extensible, pero enfocado a ser casi un "sistema operativo" propio.
    *   *Factibilidad:* Baja. Excede la necesidad de un servidor web minimalista donde solo se busca modificar archivos de configuración de forma esporádica y rápida.

**Justificación de la Elección (`vim`):**

Bajo un criterio de factibilidad y optimización de recursos, se optó por instalar **`vim`** (ejecutando `sudo apt install vim`). Proporciona una mejora significativa en la productividad frente a `nano`, permitiendo una edición rápida y segura de los archivos en `/etc/nginx/`, pero manteniendo la filosofía de un servidor ligero al no incorporar el peso ni las dependencias excesivas que exige `emacs`.


