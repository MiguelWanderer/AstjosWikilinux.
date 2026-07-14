# Bloque C - Criterio: Permisos y Propiedad

A continuación se presentan las evidencias de la gestión de permisos de archivos y directorios en el servidor Linux, correspondientes al Bloque C.

## 1. Listado detallado de archivos (`ls -l`)
La siguiente captura muestra la ejecución del comando `ls -l`, evidenciando la estructura de permisos, propietario, grupo y tamaño de los archivos del directorio de trabajo.

![Evidencia comando ls -l](../assets/img/ITEM%20C/Captura%20de%20pantalla%202026-07-13%20165227.png)

## 2. Modificación de propiedad y permisos (`chown` / `chmod`)
En esta captura se demuestra la asignación correcta de propiedad o permisos. Se aplicó el comando correspondiente para asegurar que el servicio web tenga los accesos necesarios.

![Evidencia comando chown o chmod](../assets/img/ITEM%20C/Captura%20de%20pantalla%202026-07-13%20165321.png)

## 3. Visualización de permiso especial (`ls -ld`)
Aquí se muestra la salida del comando `ls -ld` comprobando la existencia de un permiso especial en el sistema (por ejemplo, el *Sticky Bit* en el directorio `/tmp`, indicado por la letra 't').

![Evidencia permiso especial ls -ld](../assets/img/ITEM%20C/Captura%20de%20pantalla%202026-07-13%20165918.png)

## Anexo cronológico de capturas
Las siguientes evidencias complementan el proceso y se mantienen en el orden en que fueron creadas.

![Evidencia complementaria 1](../assets/img/ITEM%20C/Captura%20de%20pantalla%202026-07-13%20165406.png)

![Evidencia complementaria 2](../assets/img/ITEM%20C/Captura%20de%20pantalla%202026-07-13%20165928.png)