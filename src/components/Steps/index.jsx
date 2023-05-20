/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Progress } from "antd";
import "./styles.scss";

const Steps = ({ ...props }) => {
  const {
    avance,
    descripcion,
    fin,
    id_trabajador,
    idobjetivos,
    inicio,
    nombre,
    puntaje,
  } = props.objetivo;
  return (
    <div className="steps_card">
      <Progress
        className="calification"
        type="circle"
        percent={puntaje}
        format={(e) => `${parseInt(e)} pts`}
        size={100}
      />
      <div className="title">{nombre}</div>
      <p>Descripcion del proyecto:</p>
      <p>{descripcion}</p>
      <Progress percent={avance * 100} />

      <div>{descripcion}</div>
    </div>
  );
};

export default Steps;
