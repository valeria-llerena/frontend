/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "antd";
import Steps from "../../Steps";
import Modal from "../../Modal";
import "./styles.scss";

const ObjetivosTemplate = ({ objetivos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /*  const showModal = () => {
    setIsModalOpen(true);
  }; */

  const newObjetivos = objetivos[0];
  console.log("newObjetivos", newObjetivos);
  return (
    <div>
      <Button type="primary">Crear nuevo Objetivo</Button>
      {/* <Modal isModalOpen={true}>
        <p>hola</p>
      </Modal> */}
      <div className="objetivos_template">
        {newObjetivos?.map((objetivo, index) => {
          return <Steps key={index} objetivo={objetivo} />;
        })}
      </div>
    </div>
  );
};

export default ObjetivosTemplate;
