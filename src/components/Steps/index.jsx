/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Progress,
  Typography,
  Space,
  Modal,
  Button,
  DatePicker,
  Input,
} from "antd";
import ObjetivosService from "../../Api/objetivos";
import { AiOutlineSmile } from "react-icons/ai";
import { FaRegSadCry } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getDifferenceDays } from "../../shared/functions";
import "./styles.scss";

const ICONS_SIZE = 27;

const { Text } = Typography;
const { RangePicker } = DatePicker;

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripcion es obligatoria"),
  fechaInicio: Yup.date().required("La fecha de inicio es obligatoria"),
  fechaFin: Yup.date().required("La fecha de fin es obligatoria"),
  meta: Yup.string().required("La meta es obligatoria"),
  aceptable: Yup.string().required("La aceptable es obligatoria"),
});

const CreateProgress = ({
  showProgressModalForm,
  setShowProgressModalForm,
}) => {
  const handleSubmit = async (values) => {
    const result = await ObjetivosService.postNewObjetivos(values);
    console.log("result", result);
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
      fechaInicio: "",
      fechaFin: "",
      meta: "",
      aceptable: "",
      nombreMetrica: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newValues = { ...values };
      newValues.tipoMetrica = 1;
      alert(JSON.stringify(newValues));
    },
  });

  return (
    <Modal
      open={showProgressModalForm}
      footer={false}
      onOk={() => setShowProgressModalForm(false)} // Envolver en función de callback
      onCancel={() => setShowProgressModalForm(false)} // Envolver en función de callback
    >
      <form onSubmit={formik.handleSubmit} className="formik">
        <div className="form-items">
          <div className="labelInput">
            <Text>Nombre</Text>
            <Input
              value={formik.values.nombre}
              onChange={(event) =>
                formik.setFieldValue("nombre", event.target.value)
              }
              placeholder="Nombre"
            />
            {formik.errors.nombre && formik.touched.nombre ? (
              <Text type="danger">{formik.errors.nombre}</Text>
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
          <div className="labelInput">
            <Text style={{ marginRight: "30px" }}>Fecha Limite</Text>
            <RangePicker
              onChange={(value1, value2) => {
                formik.setFieldValue("fechaInicio", value2[0]);
                formik.setFieldValue("fechaFin", value2[1]);
              }}
              placeholder="Nombre"
            />
            {formik.errors.fechainicio && formik.touched.fechainicio ? (
              <Text type="danger">{formik.errors.fechainicio}</Text>
            ) : null}
          </div>
          <div className="labelInput">
            <Text>Meta</Text>
            <Input
              value={formik.values.meta}
              onChange={(event) =>
                formik.setFieldValue("meta", event.target.value)
              }
              placeholder="Meta"
            />
            {formik.errors.meta && formik.touched.meta ? (
              <Text type="danger">{formik.errors.meta}</Text>
            ) : null}
          </div>
          <div className="labelInput">
            <Text>Aceptable</Text>
            <Input
              value={formik.values.aceptable}
              onChange={(event) =>
                formik.setFieldValue("aceptable", event.target.value)
              }
              placeholder="Aceptable"
            />
            {formik.errors.aceptable && formik.touched.aceptable ? (
              <Text type="danger">{formik.errors.aceptable}</Text>
            ) : null}
          </div>
          <div className="labelInput">
            <Text>Metrica</Text>
            <Input
              value={formik.values.nombreMetrica}
              onChange={(event) =>
                formik.setFieldValue("nombreMetrica", event.target.value)
              }
              placeholder="Metrica"
            />
            {formik.errors.nombreMetrica && formik.touched.nombreMetrica ? (
              <Text type="danger">{formik.errors.nombreMetrica}</Text>
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

const Steps = ({ ...props }) => {
  const [showProgressModalForm, setShowProgressModalForm] = useState(false);
  console.log("props", props);
  const {
    avance,
    descripcion,
    fechaFin,
    fechaInicio,
    id_trabajador,
    idobjetivos,
    inicio,
    nombre,
    puntaje,
    meta,
    aceptable,
  } = props.objetivo;
  return (
    <div className="steps_card">
      <CreateProgress
        showProgressModalForm={showProgressModalForm}
        setShowProgressModalForm={setShowProgressModalForm}
      />
      <Progress
        className="calification"
        type="circle"
        percent={20}
        format={(e) => `${parseInt(e)} pts`}
        size={100}
      />
      <div className="space_container">
        <div className="title">{nombre}</div>
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
