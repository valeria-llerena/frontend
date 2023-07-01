/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Input, DatePicker, Typography } from "antd";
import { useFormik } from "formik";
import ObjetivosService from "../../../Api/objetivos";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Steps from "../../Steps";
import "./styles.scss";

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

const ObjetivosTemplate = ({ objetivos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector((state) => state);
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

  const handleSubmit = async (values) => {
    const result = await ObjetivosService.postNewObjetivos(values);
    if (result?.response) {
      window.location.reload();
    }
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
      newValues.idPersona = userData?.user?.dni;
      newValues.tipoMetrica = 1;
      handleSubmit(newValues);
      /* alert(JSON.stringify(newValues)); */
    },
  });

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Crear nuevo Objetivo
      </Button>
      <Modal
        title="Crear nuevo objetivo"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
      <div className="objetivos_template">
        {newObjetivos &&
          newObjetivos.map((objetivo, index) => {
            return <Steps key={index} objetivo={objetivo} />;
          })}
      </div>
    </div>
  );
};

export default ObjetivosTemplate;
