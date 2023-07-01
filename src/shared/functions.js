const getDifferenceDays = (fechaMaximaStr, fechaCreacionStr) => {
  const fechaMaxima = new Date(fechaMaximaStr);
  const fechaCreacion = new Date(fechaCreacionStr);
  var fechaActual = new Date(); // Obtiene la fecha actual
  var tiempoTotal = fechaMaxima - fechaCreacion; // Calcula el tiempo total en milisegundos
  var tiempoTranscurrido = fechaActual - fechaCreacion; // Calcula el tiempo transcurrido en milisegundos

  if (tiempoTranscurrido <= 0) {
    return 0; // Si el tiempo transcurrido es igual o menor a cero, el porcentaje es 0
  }

  var porcentaje = (tiempoTranscurrido / tiempoTotal) * 100; // Calcula el porcentaje

  if (porcentaje > 100) {
    return 100; // Si el porcentaje es mayor a 100, lo limitamos a 100
  }

  return porcentaje;
};

export { getDifferenceDays };
