import { useEffect, useState } from "react";
import ObjetivoTemplate from "../../components/Templates/ObjetivoTemplate";
import { useLocation, useParams } from "react-router-dom";
import ProgresoService from "../../Api/progreso";
import PersonaService from "../../Api/persona";

const ObjetivoPage = () => {
  const [resProgresos, setResProgresos] = useState([]);
  const [responsable, setResponsable] = useState();
  const params = useParams();
  const location = useLocation();

  const getProgresosPorObjetivo = async (idObj) => {
    const progresos = await ProgresoService.getProgresosByIdObjetivos(idObj);
    progresos.result && setResProgresos(progresos?.result);
  };

  const getRespons = async (dni) => {
    const personResp = await PersonaService.getResponsable(dni);
    setResponsable(personResp[0]);
  };

  useEffect(() => {
    getProgresosPorObjetivo(params?.id);
    getRespons(location.state.objetivo.idPersona);
  }, [params?.id, location.state]);

  return (
    <ObjetivoTemplate
      resProgresos={resProgresos}
      objetivoData={location.state.objetivo}
      responsable={responsable}
    />
  );
};

export default ObjetivoPage;
