⚙️ BITÁCORA DE ENSAMBLAJE: ARCHIVUM OMNISSIAH

Fase 1: El Chasis y la Estética (Diseño UI/UX)

    Establecimos la arquitectura visual de la Wiki de servidores Linux basándonos en los dogmas del Adeptus Mechanicus.

    Creamos el diseño de una terminal CRT con fósforo naranja, implementando efectos de parpadeo (flicker), resplandor (glow) y líneas de escaneo (scanlines) usando CSS puro.

Fase 2: El Motor de Movimiento Perpetuo (Engranajes SVG)

    Desarrollamos componentes SVG animados para simular engranajes girando en el fondo.

    Nos enfrentamos al "Hereje del Layout" (index.css por defecto de Vite) que colapsaba los vectores usando flexbox.

    Aplicamos el Rito de Desacople: extrajimos los engranajes del contenedor principal y los anclamos a la pantalla con position: fixed y medidas relativas (vw/vh).

Fase 3: Decodificación de Engramas (Markdown)

    Integramos la librería react-markdown para traducir tus archivos de texto .md importados en bruto (?raw) a código HTML legible en pantalla.

    Resolvemos el problema de las imágenes rotas, estableciendo el protocolo de almacenar las pictografías en la carpeta public/img-docs/ y usar rutas absolutas.

Fase 4: Mejora de Hardware (Engranajes de Grado Magos)

    Descartamos los engranajes básicos y forjamos vectores geométricos complejos con dientes trapezoidales, de sierra, radios estructurales y remaches usando iteraciones matemáticas (map).

    Blindamos el contenedor de los engranajes con estilos en línea (zIndex: -1, pointerEvents: 'none') para asegurar que no empujaran ni desplazaran la consola principal hacia abajo.

Fase 5: Purga de Código y Sincronización (Depuración)

    Sobrevivimos a varios colapsos de sintaxis, incluyendo errores de compilación por cadenas mal copiadas y llaves perdidas (css-ruleorselectorexpected).

    Comprendimos e implementamos los Fragmentos de React (<> ... </>) para poder renderizar los engranajes y la consola simultáneamente sin romper las reglas del DOM.

    Depuramos un error lógico de renderizado: el quinto documento de Nginx no cargaba porque los identificadores (id: 'ngnix' vs 'ngnix-despliegue') no estaban sincronizados entre el archivo de Lore y el condicional de React.

Fase 6: Refactorización Modular y Rutas

    Extraíste la lógica de los pergaminos hacia componentes independientes (<SoftwareLibreLicencias/>, <InstalacionBasica/>, etc.).

    Configuramos un "Barril de Exportación" (index.js) para agrupar los componentes.

    Purificamos las rutas de importación tras un error del compilador, ajustando el directorio exacto a ./assets/componentes/docs.
