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

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

const setDateFormat = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export { getDifferenceDays, getToday, setDateFormat };
