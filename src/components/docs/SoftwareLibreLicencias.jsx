const SoftwareLibreLicencias = () => {
  return (
    <div className="markdown-document">
      <h1>Ubuntu y el concepto de Open Source</h1>
      <p>
        Muchas personas dicen que <strong>Ubuntu es un software "gratis"</strong>, pero detrás de
        esa palabra existe una filosofía mucho más amplia. Para comprender Ubuntu es necesario
        entender primero qué significa el término <strong>Open Source</strong>.
      </p>

      <h2>¿Qué es Open Source?</h2>
      <p>
        El <strong>Open Source</strong> (código abierto) es un modelo de desarrollo de software
        que permite:
      </p>
      <ul>
        <li>Inspeccionar el código fuente.</li>
        <li>Corregir errores.</li>
        <li>Modificar el programa.</li>
        <li>Redistribuir versiones originales o modificadas.</li>
        <li>Colaborar de manera abierta en su desarrollo.</li>
      </ul>
      <p>
        Este modelo fomenta la transparencia, la colaboración y la innovación, permitiendo que
        cualquier persona pueda participar en la mejora del software.
      </p>
      <hr />

      <h1>La licencia GNU/GPL</h1>
      <p>
        La <strong>GNU General Public License (GPL)</strong> es la licencia más representativa del
        software libre.
      </p>
      <p>
        Fue creada por <strong>Richard Stallman</strong> y la{' '}
        <strong>Free Software Foundation (FSF)</strong> para garantizar que todos los usuarios
        conserven las siguientes libertades:
      </p>
      <ul>
        <li>Utilizar el programa para cualquier propósito.</li>
        <li>Estudiar cómo funciona.</li>
        <li>Modificar su funcionamiento.</li>
        <li>Compartir copias del software.</li>
        <li>Distribuir versiones modificadas.</li>
      </ul>

      <h2>Objetivos originales de la GPL</h2>
      <p>La primera versión de la licencia perseguía varios objetivos fundamentales:</p>

      <h3>Evitar la privatización del software</h3>
      <p>
        Impedir que una empresa pudiera modificar el código abierto y convertirlo posteriormente
        en software propietario.
      </p>

      <h3>Cerrar vacíos legales</h3>
      <p>
        Evitar que terceros añadieran restricciones mediante contratos privados o licencias
        adicionales que limitaran las libertades otorgadas por la GPL.
      </p>

      <h3>Garantizar el acceso al código fuente</h3>
      <p>
        Toda persona que distribuyera el software en formato ejecutable (binario) debía
        proporcionar también el código fuente o una oferta escrita para entregarlo.
      </p>
      <hr />

      <h1>Evolución histórica de la GPL</h1>
      <h2>GPL versión 1 (GPLv1)</h2>
      <p>La primera versión tenía una limitación importante.</p>
      <p>
        No protegía adecuadamente frente al uso de <strong>patentes de software</strong>. Una
        empresa podía patentar una modificación del código y restringir legalmente su utilización,
        contradiciendo el espíritu del software libre.
      </p>
      <hr />

      <h2>GPL versión 2 (GPLv2)</h2>
      <p>
        En <strong>junio de 1991</strong>, la Free Software Foundation publicó la{' '}
        <strong>GPLv2</strong>, incorporando una de sus cláusulas más conocidas:
      </p>
      <blockquote>
        <p>
          <strong>Libertad o Muerte</strong>
        </p>
      </blockquote>
      <p>Esta cláusula establece que:</p>
      <blockquote>
        <p>
          Si una patente impide distribuir el software con todas las libertades de la GPL,
          entonces el software no puede distribuirse.
        </p>
      </blockquote>
      <p>Su objetivo era impedir que las patentes limitaran las libertades de los usuarios.</p>
      <hr />

      <h2>GPL versión 3 (GPLv3)</h2>
      <p>
        Publicada en <strong>junio de 2007</strong>, la GPLv3 representa la evolución más moderna
        de la licencia.
      </p>
      <p>
        Mantiene el principio del <strong>Copyleft</strong>, pero incorpora nuevas protecciones
        adaptadas a Internet y a los problemas legales surgidos durante los años posteriores.
      </p>

      <h2>Principales características</h2>

      <h3>1. Cláusula Anti-Tivoización</h3>
      <h4>El problema</h4>
      <p>
        Algunos fabricantes utilizaban software GPL dentro de sus dispositivos, pero bloqueaban el
        hardware mediante firmas digitales para impedir que el usuario pudiera instalar versiones
        modificadas.
      </p>
      <h4>La solución</h4>
      <p>
        Si un fabricante distribuye un dispositivo con software GPLv3, está obligado a proporcionar
        la información y las claves necesarias para instalar versiones modificadas por el usuario.
      </p>
      <hr />

      <h3>2. Protección frente a patentes</h3>
      <h4>El problema</h4>
      <p>
        Grandes empresas utilizaban sus patentes para demandar a usuarios o desarrolladores de
        software libre.
      </p>
      <h4>La solución</h4>
      <p>
        Quien distribuya software bajo GPLv3 concede automáticamente una licencia gratuita de sus
        patentes relacionadas con dicho software.
      </p>
      <p>
        Si posteriormente demanda a otro usuario utilizando esas mismas patentes, pierde
        automáticamente los derechos que le concede la licencia GPL.
      </p>
      <hr />

      <h3>3. Mayor compatibilidad entre licencias</h3>
      <p>
        La GPLv3 fue reescrita para mejorar su compatibilidad con otras licencias de software
        libre, especialmente con la licencia <strong>Apache 2.0</strong>, facilitando la
        reutilización de componentes entre proyectos.
      </p>
      <hr />

      <h3>4. Período de gracia</h3>
      <p>
        En la GPLv2 cualquier incumplimiento provocaba la pérdida inmediata de los derechos
        otorgados por la licencia.
      </p>
      <p>
        La GPLv3 incorpora un período de <strong>30 días</strong> para corregir la infracción
        después de ser notificado.
      </p>
      <p>Si el problema se corrige dentro de ese plazo, los derechos se recuperan automáticamente.</p>
      <hr />

      <h1>Licencias permisivas</h1>
      <p>
        A diferencia de la GPL, existen licencias cuya filosofía consiste en permitir prácticamente
        cualquier uso del código.
      </p>
      <p>Su idea principal puede resumirse así:</p>
      <blockquote>
        <p>
          "Puedes hacer prácticamente lo que quieras con mi código, incluso utilizarlo en software
          propietario, siempre que mantengas el reconocimiento al autor."
        </p>
      </blockquote>
      <p>Las más conocidas son:</p>
      <ul>
        <li>MIT</li>
        <li>BSD</li>
        <li>Apache 2.0</li>
      </ul>
      <hr />

      <h1>Licencia MIT</h1>
      <p>La licencia <strong>MIT</strong> es una de las más simples y utilizadas.</p>
      <h2>Permite</h2>
      <ul>
        <li>Copiar el software.</li>
        <li>Modificarlo.</li>
        <li>Distribuirlo.</li>
        <li>Venderlo.</li>
        <li>Utilizarlo comercialmente.</li>
      </ul>
      <h2>Condición</h2>
      <p>Debe conservarse el aviso de copyright y la licencia original.</p>
      <h2>Código cerrado</h2>
      <p>Sí permite convertir el proyecto en software propietario.</p>
      <hr />

      <h1>Licencia BSD</h1>
      <p>
        Originada en la Universidad de California (Berkeley), es muy similar a la licencia MIT.
      </p>
      <p>Existen dos variantes principales:</p>
      <ul>
        <li>BSD 2-Clause</li>
        <li>BSD 3-Clause</li>
      </ul>
      <h2>Diferencia principal</h2>
      <p>
        La versión <strong>BSD 3-Clause</strong> prohíbe utilizar el nombre de los autores o de la
        organización original para promocionar productos derivados sin autorización.
      </p>
      <p>Es una licencia ampliamente utilizada en sistemas operativos como <strong>FreeBSD</strong>.</p>
      <hr />

      <h1>Licencia Apache 2.0</h1>
      <p>
        Desarrollada por la <strong>Apache Software Foundation</strong>, incorpora protecciones
        legales adicionales.
      </p>
      <h2>Características</h2>
      <h3>Licencia de patentes</h3>
      <p>
        Quien contribuya código concede automáticamente una licencia gratuita sobre las patentes
        relacionadas con ese software.
      </p>
      <h3>Protección jurídica</h3>
      <p>
        Si un usuario demanda por patentes relacionadas con el proyecto, pierde automáticamente los
        derechos otorgados por la licencia.
      </p>
      <h3>Obligación de indicar modificaciones</h3>
      <p>
        Cuando se modifica un archivo original, debe indicarse claramente que dicho archivo ha sido
        alterado.
      </p>
      <hr />

      <h1>Software propietario</h1>
      <p>El software propietario representa el modelo contrario al software libre.</p>
      <p>En este caso:</p>
      <ul>
        <li>El código fuente permanece cerrado.</li>
        <li>El usuario únicamente obtiene un permiso limitado de uso (EULA).</li>
        <li>No puede modificar el programa.</li>
        <li>No puede redistribuirlo.</li>
        <li>Generalmente tampoco puede realizar ingeniería inversa.</li>
      </ul>
      <h2>Características</h2>
      <ul>
        <li>Código fuente privado.</li>
        <li>Control total por parte del propietario.</li>
        <li>Restricciones de copia y distribución.</li>
        <li>Actualizaciones controladas exclusivamente por la empresa.</li>
        <li>Posibilidad de retirar el soporte cuando el propietario lo decida.</li>
      </ul>
      <hr />

      <h1>Comparación de licencias</h1>
      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>GPL</th>
            <th>MIT</th>
            <th>BSD</th>
            <th>Apache 2.0</th>
            <th>Propietario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Código abierto</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Permite modificar</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Permite redistribuir</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Obliga a compartir el código modificado</td>
            <td>✅</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>No aplica</td>
          </tr>
          <tr>
            <td>Permite convertirlo en software propietario</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Protección frente a patentes</td>
            <td>Parcial (GPLv2) / Completa (GPLv3)</td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>Depende del propietario</td>
          </tr>
          <tr>
            <td>Requiere conservar atribución</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>No aplica</td>
          </tr>
        </tbody>
      </table>
      <hr />

      <h1>¿Que licencia usa Ubuntu?</h1>
      <p>
        Esa es una pregunta complicada de responder ya que Ubuntu usa un mix de licencias para
        mantener su categoria dentro de las distros de linux.
      </p>
      <p>
        La mayoria de los componentes fundamentales del sistema operativo son de codigo abierto
        pero otros como los componentes de control de tarjetas de video, firmware dentran de
        componetnes <strong>Restricted</strong> y algo mas la propiedad intelectual dentro de la
        misma distro como su logo o el mismo nombre.
      </p>

      <h1>Conclusión</h1>
      <p>
        Ubuntu utiliza una filosofía basada en el software libre y el código abierto. Su
        desarrollo se apoya principalmente en componentes distribuidos bajo la licencia{' '}
        <strong>GNU GPL</strong>, aunque también incorpora software bajo licencias permisivas como
        MIT, BSD y Apache.
      </p>
      <p>
        Comprender las diferencias entre estas licencias permite entender por qué algunos
        proyectos obligan a compartir las modificaciones mientras que otros permiten convertir el
        software en productos completamente propietarios.
      </p>
    </div>
  );
};

export default SoftwareLibreLicencias;
