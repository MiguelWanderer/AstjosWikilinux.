# Ubuntu y el concepto de Open Source

Muchas personas dicen que **Ubuntu es un software "gratis"**, pero detrás de esa palabra existe una filosofía mucho más amplia. Para comprender Ubuntu es necesario entender primero qué significa el término **Open Source**.

## ¿Qué es Open Source?

El **Open Source** (código abierto) es un modelo de desarrollo de software que permite:

- Inspeccionar el código fuente.
- Corregir errores.
- Modificar el programa.
- Redistribuir versiones originales o modificadas.
- Colaborar de manera abierta en su desarrollo.

Este modelo fomenta la transparencia, la colaboración y la innovación, permitiendo que cualquier persona pueda participar en la mejora del software.

---

# La licencia GNU/GPL

La **GNU General Public License (GPL)** es la licencia más representativa del software libre.

Fue creada por **Richard Stallman** y la **Free Software Foundation (FSF)** para garantizar que todos los usuarios conserven las siguientes libertades:

- Utilizar el programa para cualquier propósito.
- Estudiar cómo funciona.
- Modificar su funcionamiento.
- Compartir copias del software.
- Distribuir versiones modificadas.

## Objetivos originales de la GPL

La primera versión de la licencia perseguía varios objetivos fundamentales:

### Evitar la privatización del software

Impedir que una empresa pudiera modificar el código abierto y convertirlo posteriormente en software propietario.

### Cerrar vacíos legales

Evitar que terceros añadieran restricciones mediante contratos privados o licencias adicionales que limitaran las libertades otorgadas por la GPL.

### Garantizar el acceso al código fuente

Toda persona que distribuyera el software en formato ejecutable (binario) debía proporcionar también el código fuente o una oferta escrita para entregarlo.

---

# Evolución histórica de la GPL

## GPL versión 1 (GPLv1)

La primera versión tenía una limitación importante.

No protegía adecuadamente frente al uso de **patentes de software**. Una empresa podía patentar una modificación del código y restringir legalmente su utilización, contradiciendo el espíritu del software libre.

---

## GPL versión 2 (GPLv2)

En **junio de 1991**, la Free Software Foundation publicó la **GPLv2**, incorporando una de sus cláusulas más conocidas:

> **Libertad o Muerte**

Esta cláusula establece que:

> Si una patente impide distribuir el software con todas las libertades de la GPL, entonces el software no puede distribuirse.

Su objetivo era impedir que las patentes limitaran las libertades de los usuarios.

---

## GPL versión 3 (GPLv3)

Publicada en **junio de 2007**, la GPLv3 representa la evolución más moderna de la licencia.

Mantiene el principio del **Copyleft**, pero incorpora nuevas protecciones adaptadas a Internet y a los problemas legales surgidos durante los años posteriores.

## Principales características

### 1. Cláusula Anti-Tivoización

#### El problema

Algunos fabricantes utilizaban software GPL dentro de sus dispositivos, pero bloqueaban el hardware mediante firmas digitales para impedir que el usuario pudiera instalar versiones modificadas.

#### La solución

Si un fabricante distribuye un dispositivo con software GPLv3, está obligado a proporcionar la información y las claves necesarias para instalar versiones modificadas por el usuario.

---

### 2. Protección frente a patentes

#### El problema

Grandes empresas utilizaban sus patentes para demandar a usuarios o desarrolladores de software libre.

#### La solución

Quien distribuya software bajo GPLv3 concede automáticamente una licencia gratuita de sus patentes relacionadas con dicho software.

Si posteriormente demanda a otro usuario utilizando esas mismas patentes, pierde automáticamente los derechos que le concede la licencia GPL.

---

### 3. Mayor compatibilidad entre licencias

La GPLv3 fue reescrita para mejorar su compatibilidad con otras licencias de software libre, especialmente con la licencia **Apache 2.0**, facilitando la reutilización de componentes entre proyectos.

---

### 4. Período de gracia

En la GPLv2 cualquier incumplimiento provocaba la pérdida inmediata de los derechos otorgados por la licencia.

La GPLv3 incorpora un período de **30 días** para corregir la infracción después de ser notificado.

Si el problema se corrige dentro de ese plazo, los derechos se recuperan automáticamente.

---

# Licencias permisivas

A diferencia de la GPL, existen licencias cuya filosofía consiste en permitir prácticamente cualquier uso del código.

Su idea principal puede resumirse así:

> "Puedes hacer prácticamente lo que quieras con mi código, incluso utilizarlo en software propietario, siempre que mantengas el reconocimiento al autor."

Las más conocidas son:

- MIT
- BSD
- Apache 2.0

---

# Licencia MIT

La licencia **MIT** es una de las más simples y utilizadas.

## Permite

- Copiar el software.
- Modificarlo.
- Distribuirlo.
- Venderlo.
- Utilizarlo comercialmente.

## Condición

Debe conservarse el aviso de copyright y la licencia original.

## Código cerrado

Sí permite convertir el proyecto en software propietario.

---

# Licencia BSD

Originada en la Universidad de California (Berkeley), es muy similar a la licencia MIT.

Existen dos variantes principales:

- BSD 2-Clause
- BSD 3-Clause

## Diferencia principal

La versión **BSD 3-Clause** prohíbe utilizar el nombre de los autores o de la organización original para promocionar productos derivados sin autorización.

Es una licencia ampliamente utilizada en sistemas operativos como **FreeBSD**.

---

# Licencia Apache 2.0

Desarrollada por la **Apache Software Foundation**, incorpora protecciones legales adicionales.

## Características

### Licencia de patentes

Quien contribuya código concede automáticamente una licencia gratuita sobre las patentes relacionadas con ese software.

### Protección jurídica

Si un usuario demanda por patentes relacionadas con el proyecto, pierde automáticamente los derechos otorgados por la licencia.

### Obligación de indicar modificaciones

Cuando se modifica un archivo original, debe indicarse claramente que dicho archivo ha sido alterado.

---

# Software propietario

El software propietario representa el modelo contrario al software libre.

En este caso:

- El código fuente permanece cerrado.
- El usuario únicamente obtiene un permiso limitado de uso (EULA).
- No puede modificar el programa.
- No puede redistribuirlo.
- Generalmente tampoco puede realizar ingeniería inversa.

## Características

- Código fuente privado.
- Control total por parte del propietario.
- Restricciones de copia y distribución.
- Actualizaciones controladas exclusivamente por la empresa.
- Posibilidad de retirar el soporte cuando el propietario lo decida.

---

# Comparación de licencias

| Característica | GPL | MIT | BSD | Apache 2.0 | Propietario |
|----------------|-----|-----|-----|------------|-------------|
| Código abierto | ✅ | ✅ | ✅ | ✅ | ❌ |
| Permite modificar | ✅ | ✅ | ✅ | ✅ | ❌ |
| Permite redistribuir | ✅ | ✅ | ✅ | ✅ | ❌ |
| Obliga a compartir el código modificado | ✅ | ❌ | ❌ | ❌ | No aplica |
| Permite convertirlo en software propietario | ❌ | ✅ | ✅ | ✅ | Sí |
| Protección frente a patentes | Parcial (GPLv2) / Completa (GPLv3) | ❌ | ❌ | ✅ | Depende del propietario |
| Requiere conservar atribución | ✅ | ✅ | ✅ | ✅ | No aplica |

---
# ¿Que licencia usa Ubuntu? 

Esa es una pregunta complicada de responder ya que Ubuntu usa un mix de licencias para mantener su categoria dentro de las distros de linux.
La mayoria de los componentes fundamentales del sistema operativo son de codigo abierto pero otros como los componentes de control de tarjetas de video, firmware dentran de componetnes **Restricted** y algo mas la propiedad intelectual dentro de la misma distro como su logo o el mismo nombre.


# Conclusión

Ubuntu utiliza una filosofía basada en el software libre y el código abierto. Su desarrollo se apoya principalmente en componentes distribuidos bajo la licencia **GNU GPL**, aunque también incorpora software bajo licencias permisivas como MIT, BSD y Apache.

Comprender las diferencias entre estas licencias permite entender por qué algunos proyectos obligan a compartir las modificaciones mientras que otros permiten convertir el software en productos completamente propietarios.