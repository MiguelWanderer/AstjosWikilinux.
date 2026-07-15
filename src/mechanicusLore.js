export const mechanicusLore = {
  header: '[ADEPTUS MECHANICUS // COGITATOR UNIT.78 // DATA-VAULT 40K]',
  introTitle: '[WIKI // INTRODUCCIÓN AL SERVIDOR LINUX // OPERACIÓN DEL ESPÍRITU DE LA MÁQUINA]',
  introProtocol: '[PROTOCOLO 34.7: KNOWLEDGE-VAULT 113 // INITIATED BY TECH-PRIEST]',
  introText:
    'Bienvenido, Iniciado. El Servidor Linux es la base del Conocimiento Sagrado. Este Cogitador archiva la sabiduría necesaria para la correcta administración y los rituales del sistema.',
  machineLitany:
    '------------- [LITANIA DE SINCRONIZACIÓN] -------------\nHonra al Omnissiah. Verifica los sellos, purga la impureza y mantén estable el espíritu de la máquina.',
  warning:
    '------------- [EL ESPÍRITU DE LA MÁQUINA] -------------\nSiga los protocolos de mantenimiento. El error es fracaso. La lógica es pura.',
  sacredDocs: [
    { id: 'software-libre', label: '01// SOFTWARE_LIBRE_Y_LICENCIAS', sigil: '⟠' },
    { id: 'instalacion', label: '02// INSTALACION_Y_CONFIGURACION_BASICA', sigil: '⧖' },
    { id: 'permisos', label: '03// PERMISOS_POR_LINEA_DE_COMANDOS', sigil: '⛭' },
    { id: 'gestores-paquetes', label: '04// GESTORES_DE_PAQUETES', sigil: '⎔' },
    { id: 'ngnix-despliegue', label: '05// NGNIX_Y_DESPLIEGUE_DEL_SITIO', sigil: '⌁' },
  ],
  docRituals: {
    'software-libre': {
      title: '01 // SOFTWARE_LIBRE_Y_LICENCIAS',
      body: [
        'El conocimiento abierto preserva la memoria colectiva de la máquina.',
        'La licencia GPL protege la libertad de estudiar, modificar y redistribuir el código.',
      ],
    },
    instalacion: {
      title: '02 // INSTALACION_Y_CONFIGURACION_BASICA',
      body: [
        'La instalación correcta prepara el contenedor para recibir la bendición del sistema.',
        'Los repositorios y la configuración inicial deben purificarse antes de continuar.',
      ],
    },
    permisos: {
      title: '03 // PERMISOS_POR_LINEA_DE_COMANDOS',
      body: [
        'Los permisos son sellos de acceso que deben aplicarse con precisión ritual.',
        'La línea de comandos permite invocar propietarios, grupos y privilegios con disciplina.',
      ],
    },
    'gestores-paquetes': {
      title: '04 // GESTORES_DE_PAQUETES',
      body: [
        'El gestor de paquetes mantiene la estructura del sistema y sus dependencias en orden.',
        'APT y otros administradores alimentan el archivo sagrado con componentes verificados.',
      ],
    },
    'ngnix-despliegue': {
      title: '05 // NGNIX_Y_DESPLIEGUE_DEL_SITIO',
      body: [
        'El despliegue del sitio requiere un guardián que reciba las peticiones y las dirija.',
        'Nginx actúa como centinela del servicio, resguardando la salida al exterior.',
      ],
    },
  },
};