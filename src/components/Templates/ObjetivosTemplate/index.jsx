import { useState } from "react";
import { Button } from "antd";
import Steps from "../../Steps";
import Modal from "../../Modal";
import "./styles.scss";

/* eslint-disable react/prop-types */
const ObjetivosTemplate = ({ objetivos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const newObjetivos = objetivos[0];
  console.log("newObjetivos", newObjetivos);
  return (
    <div>
      <Button
        type="primary"
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        Crear nuevo Objetivo
      </Button>
      <Modal>
        <p>hola</p>
      </Modal>
      <div className="objetivos_template">
        {newObjetivos?.map((objetivo, index) => {
          return <Steps key={index} objetivo={objetivo} />;
        })}
      </div>
    </div>
  );
};

export default ObjetivosTemplate;
