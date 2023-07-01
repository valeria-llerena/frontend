import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input, Alert } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { login, logout } from "../../../shared/redux/actions/authActions";
import { validationSchema } from "./validations";
import PersonaService from "../../../Api/persona";
import Routes from "../../../shared/navigation";
import "./styles.scss";

const LoginTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const rsp = await PersonaService.loginPersona(values);
    console.log("rsp", rsp);
    if (rsp[0]) {
      dispatch(login(rsp[0]));
      navigate(Routes.home.objetivos);
    }
  };
  return (
    <div className="login_container">
      <div>
        <h2>Iniciar sesión</h2>
        <Formik
          initialValues={{ dni: "", dni2: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div>
              <label htmlFor="dni">DNI:</label>
              <Field as={Input} type="text" id="dni" name="dni" />
              <ErrorMessage name="dni" component={Alert} type="error" />
            </div>
            <div>
              <label htmlFor="dni2">DNI:</label>
              <Field as={Input} type="text" id="dni2" name="dni2" />
              <ErrorMessage name="dni2" component={Alert} type="error" />
            </div>
            <Button className="submit-button" type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default LoginTemplate;
