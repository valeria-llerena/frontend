import LoginTemplate from "../../components/Templates/LoginTemplate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import mainRoutes from "../../shared/navigation";

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("state", isLoggedIn);
    isLoggedIn === true && navigate(mainRoutes.home.objetivos);
  }, [isLoggedIn, navigate]);

  return <LoginTemplate />;
};

export default LoginPage;
