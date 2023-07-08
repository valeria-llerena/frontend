/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Progress, Typography, Modal, Button, Input } from "antd";
import ObjetivosService from "../../Api/objetivos";
import { AiOutlineSmile } from "react-icons/ai";
import { FaRegSadCry } from "react-icons/fa";
import ProgresoService from "../../Api/progreso";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getDifferenceDays, getToday } from "../../shared/functions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Routes from "../../shared/navigation";
import "./styles.scss";

const ICONS_SIZE = 27;

const { Text } = Typography;

const validationSchema = Yup.object().shape({
  porcentaje: Yup.number().required("El porcentaje es obligatorio"),
  descripcion: Yup.string().required("La descripcion es obligatoria"),
});

const CreateProgress = ({
  showProgressModalForm,
  setShowProgressModalForm,
  idObjetivo,
  getObjetivos,
}) => {
  const userData = useSelector((state) => state);

  const handleSubmit = async (values) => {
    const result = await ProgresoService.postNewProgreso(values);
    if (result.response) {
      getObjetivos();
      setShowProgressModalForm(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      porcentaje: "",
      descripcion: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newValues = { ...values };
      newValues.fecha = getToday();
      newValues.idObjetivo = idObjetivo;
      newValues.idPersona = userData.user.dni;
      handleSubmit(newValues);
    },
  });

  return (
    <Modal
      title="Registrar nuevo progreso"
      open={showProgressModalForm}
      footer={false}
      onOk={() => setShowProgressModalForm(false)} // Envolver en función de callback
      onCancel={() => setShowProgressModalForm(false)} // Envolver en función de callback
    >
      <form onSubmit={formik.handleSubmit} className="formik">
        <div className="form-items">
          <div className="labelInput">
            <Text>Porcentaje</Text>
            <Input
              value={formik.values.porcentaje}
              onChange={(event) =>
                formik.setFieldValue("porcentaje", event.target.value)
              }
              placeholder="Porcentaje"
            />
            {formik.errors.porcentaje && formik.touched.porcentaje ? (
              <Text type="danger">{formik.errors.porcentaje}</Text>
            ) : null}
          </div>
          <div className="labelInput">
            <Text>Descripcion</Text>
            <Input
              value={formik.values.descripcion}
              onChange={(event) =>
                formik.setFieldValue("descripcion", event.target.value)
              }
              placeholder="Descripcion"
            />
            {formik.errors.descripcion && formik.touched.descripcion ? (
              <Text type="danger">{formik.errors.descripcion}</Text>
            ) : null}
          </div>
        </div>
        <div className="buttonSpace">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const Steps = ({ getObjetivos, ...props }) => {
  const [showProgressModalForm, setShowProgressModalForm] = useState(false);
  const {
    avance,
    descripcion,
    fechaFin,
    fechaInicio,
    id_trabajador,
    idObjetivo,
    inicio,
    nombre,
    puntaje,
    meta,
    aceptable,
  } = props.objetivo;
  const navigate = useNavigate();

  const navigateToObjetivo = (id) => {
    navigate(`/objetivos/${id}`, { state: { id, objetivo: props.objetivo } });
  };

  return (
    <div className="steps_card">
      <CreateProgress
        showProgressModalForm={showProgressModalForm}
        setShowProgressModalForm={setShowProgressModalForm}
        idObjetivo={idObjetivo}
        getObjetivos={getObjetivos}
      />
      <Progress
        className="calification"
        type="circle"
        percent={20}
        format={(e) => `${parseInt(e)} pts`}
        size={100}
      />
      <div className="space_container">
        <div className="title">
          <button onClick={() => navigateToObjetivo(idObjetivo)}>
            {nombre}
          </button>
        </div>
        <Text>Descripcion del proyecto:</Text>
        <Text strong>{descripcion}</Text>
        <div className="criterias">
          <div className="d-flex">
            <AiOutlineSmile size={ICONS_SIZE} color="green" />:
            <Text>{meta}</Text>
          </div>
          <div className="d-flex">
            <FaRegSadCry size={ICONS_SIZE} color="red" />:
            <Text>{aceptable}</Text>
          </div>
        </div>

        <div>
          <Text>Progreso del objetivo:</Text>
          <Progress percent={0.3 * 100} />
        </div>
        <div>
          <Text>Tiempo restante:</Text>
          <Progress
            percent={getDifferenceDays(fechaFin, fechaInicio).toFixed(2)}
            strokeColor={
              getDifferenceDays(fechaFin, fechaInicio).toFixed(2) > 80
                ? "red"
                : getDifferenceDays(fechaFin, fechaInicio).toFixed(2) > 50
                ? "yellow"
                : "lightgreen"
            }
          />
        </div>
      </div>
      <Button
        onClick={() => setShowProgressModalForm(true)} // Envolver en función de callback
        style={{ marginTop: "20px", float: "right" }}
        type="primary"
      >
        Registrar nuevo progreso
      </Button>
    </div>
  );
};

export default Steps;
