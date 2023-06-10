/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form as FormAntd,
  DatePicker,
  Select,
  Typography,
} from "antd";
import { Formik, Form, Field, useFormik } from "formik";
import ObjetivosService from "../../../Api/objetivos";
import * as Yup from "yup";
import Steps from "../../Steps";
import "./styles.scss";

const { Text } = Typography;

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripcion es obligatoria"),
  porcentaje: Yup.string().required("La porcentaje es obligatoria"),
  persona: Yup.string().required("La persona es obligatoria"),
  id_metrica: Yup.string().required("La id_metrica es obligatoria"),
  fechainicio: Yup.string().required("La fechainicio es obligatoria"),
  fechafin: Yup.string().required("La fechafin es obligatoria"),
  meta: Yup.string().required("La meta es obligatoria"),
  aceptable: Yup.string().required("La aceptable es obligatoria"),
});

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

  const handleSubmit = async (values) => {
    const result = await ObjetivosService.postNewObjetivos(values);
    console.log("result", result);
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
      porcentaje: "",
      persona: "",
      idmetrica: "",
      fechainicio: "",
      fechafin: "",
      meta: "",
      aceptable: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
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
              <Text>Porcentaje</Text>
              <Input
                value={formik.values.porcentaje}
                onChange={(event) =>
                  formik.setFieldValue("porcentaje", event.target.value)
                }
                placeholder="Porcentaje float"
              />
              {formik.errors.porcentaje && formik.touched.porcentaje ? (
                <Text type="danger">{formik.errors.porcentaje}</Text>
              ) : null}
            </div>
            <div className="labelInput">
              <Text>Persona *</Text>
              <Input
                value={formik.values.persona}
                onChange={(event) =>
                  formik.setFieldValue("persona", event.target.value)
                }
                placeholder="Persona int"
              />
              {formik.errors.persona && formik.touched.persona ? (
                <Text type="danger">{formik.errors.persona}</Text>
              ) : null}
            </div>
            <div className="labelInput">
              <Text>ID Metrica *</Text>
              <Input
                value={formik.values.idmetrica}
                onChange={(event) =>
                  formik.setFieldValue("idmetrica", event.target.value)
                }
                placeholder="ID Metrica int"
              />
              {formik.errors.idmetrica && formik.touched.idmetrica ? (
                <Text type="danger">{formik.errors.idmetrica}</Text>
              ) : null}
            </div>
            <div className="labelInput">
              <Text>Fecha de inicio</Text>
              <Input
                value={formik.values.fechainicio}
                onChange={(event) =>
                  formik.setFieldValue("fechainicio", event.target.value)
                }
                placeholder="Nombre"
              />
              {formik.errors.fechainicio && formik.touched.fechainicio ? (
                <Text type="danger">{formik.errors.fechainicio}</Text>
              ) : null}
            </div>
            <div className="labelInput">
              <Text>Fecha de fin</Text>
              <Input
                value={formik.values.fechafin}
                onChange={(event) =>
                  formik.setFieldValue("fechafin", event.target.value)
                }
                placeholder="Fecha de fin"
              />
              {formik.errors.fechafin && formik.touched.fechafin ? (
                <Text type="danger">{formik.errors.fechafin}</Text>
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
          </div>
          <div className="buttonSpace">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </form>
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
