const dataSource = [
  {
    key: "1",
    idProgreso: "Mike",
    fecha: 32,
    porcentaje: "10 Downing Street",
    idObjetivo: "10 Downing Street",
    descripcion: "10 Downing Street",
    idPersona: "10 Downing Street",
    status: "10 Downing Street",
  },
];

const colsProgreso = [
  {
    title: "ID Progreso",
    dataIndex: "idProgreso",
    key: "idProgreso",
  },
  {
    title: "Fecha",
    dataIndex: "fecha",
    key: "fecha",
  },
  {
    title: "Porcentaje",
    dataIndex: "porcentaje",
    key: "porcentaje",
  },
  {
    title: "ID Objetivo",
    dataIndex: "idObjetivo",
    key: "idObjetivo",
  },
  {
    title: "Descripcion",
    dataIndex: "descripcion",
    key: "descripcion",
  },
  {
    title: "ID Persona",
    dataIndex: "idPersona",
    key: "idPersona",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: () => <p>data</p>,
  },
];

export { dataSource, colsProgreso };
