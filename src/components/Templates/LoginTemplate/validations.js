import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  dni: Yup.string().required("El DNI es obligatorio"),
  dni2: Yup.string().required("El DNI es obligatorio"),
});

export { validationSchema };
