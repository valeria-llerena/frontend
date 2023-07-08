import { Button } from "antd";
import ProgresoService from "../../../Api/progreso";
import { setDateFormat } from "../../../shared/functions";

const colsProgreso = [
  {
    title: "ID Progreso",
    dataIndex: "idProgreso",
    key: "idProgreso",
  },
  {
    title: "Fecha de registro",
    dataIndex: "fecha",
    key: "fecha",
    render: (date) => {
      return <p>{setDateFormat(date)}</p>;
    },
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
    render: (status, record) => {
      const setStatusValidated = async (data) => {
        const rsp = await ProgresoService.updateProgreso(data);
      };
      return (
        <div>
          <Button
            type={"primary"}
            danger={status === 0 ? true : false}
            disabled={status === 2 || status === 0 ? true : false}
            onClick={() => {
              setStatusValidated({ idProgreso: record.idProgreso, status: 2 });
            }}
          >
            {status === 2 ? "Aprobado" : status === 0 ? "Rechazado" : "Aprobar"}
          </Button>
          {status === 1 && (
            <Button
              type={"primary"}
              danger
              onClick={() => {
                setStatusValidated({
                  idProgreso: record.idProgreso,
                  status: 0,
                });
              }}
            >
              Rechazar
            </Button>
          )}
        </div>
      );
    },
  },
];

export { colsProgreso };
