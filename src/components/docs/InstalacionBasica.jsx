const InstalacionBasica = () => {
  return (
    <div className="markdown-document">
      <h2>¿Que es la Nat?</h2>
      <p>
        La <strong>NAT</strong> o directorio de red es aquello que entendemos dentro de la misma
        matrix de la red, es aquello que nos lleva por los caminos sinuosos de los puertos, redes
        y configuraciones para que nuestro movimiento atravez de la matrix.
      </p>
      <p>
        Es una tecnica secreta del camino de la placa de silicio que permite que varios
        dispositivos (espiritus de la maquina) se conecten a travez de la red de datos.
      </p>
      <p>
        Por lo cual podemos decir que la <strong>NAT</strong> es un maestro capaz de conectar
        varias ip publicas entre si, aumenta la seguridad por que los internos nos no quedan
        expuesto a la red abierta, donde bandidos y script kiddos vagan rampantes y conservar y
        manipular las IPV4-IPV6.
      </p>

      <h2>DHCP VS IP FIJA</h2>
      <p>
        La diferencia <strong>principal</strong> entre DHCP e IP fija es que DHCP asigna
        direcciones automáticamente y de forma temporal, mientras que una IP fija se configura
        manualmente y permanece constante.
      </p>
      <p>
        En redes domésticas y de oficina, DHCP simplifica la gestión; en servidores y servicios
        críticos, una IP fija garantiza estabilidad y accesibilidad.
      </p>

      <h2>¿Entonces cual es mejor?</h2>
      <p>
        La respuesta rapida es que ninguna. Son herramientas un buen ingienero en sistemas podra
        usarlas para conseguir los resultados esperados que pida el cliente o la empresa donde
        trabaje.
      </p>
    </div>
  );
};

export default InstalacionBasica;
