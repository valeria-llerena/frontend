import ProgresoTemplate from "../../components/Templates/ProgresoTemplate";
import ProgresoService from "../../Api/progreso";
import { useEffect, useState } from "react";

const ProgresoPage = () => {
  const [progresos, setProgresos] = useState([]);
  const getProgresos = async () => {
    const progr = await ProgresoService.getProgresos();
    setProgresos(progr);
  };

  useEffect(() => {
    getProgresos();
  }, []);

  return <ProgresoTemplate progresos={progresos} getProgresos={getProgresos} />;
};

export default ProgresoPage;
