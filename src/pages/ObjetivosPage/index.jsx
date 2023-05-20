import { useEffect, useState } from "react";
import ObjetivosService from "../../Api/objetivos";
import ObjetivosTemplate from "../../components/Templates/ObjetivosTemplate";

const ObjetivosPage = () => {
  const [objetivos, setObjetivos] = useState([]);

  const getObjetivos = async () => {
    const objetivos = await ObjetivosService.getObjetivos();
    setObjetivos(objetivos);
  };

  useEffect(() => {
    getObjetivos();
  }, []);

  return <ObjetivosTemplate objetivos={objetivos} />;
};

export default ObjetivosPage;
