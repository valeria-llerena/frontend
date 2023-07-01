import LoginPage from "./pages/LoginPage";
import ObjetivosPage from "./pages/ObjetivosPage";
import ProgresoPage from "./pages/ProgresoPage";
import ReunionPage from "./pages/ReunionPage";
import ReunionesPage from "./pages/ReunionesPage";
import HomePage from "./pages/HomePage";
import Routes from "./shared/navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ObjetivoPage from "./pages/ObjetivoPage";

function App() {
  const { home, mainRoutes } = Routes;

  const router = createBrowserRouter([
    {
      path: mainRoutes.login,
      element: <LoginPage />,
    },
    {
      path: home.init,
      element: <HomePage />,
      children: [
        {
          path: home.objetivos,
          element: <ObjetivosPage />,
        },
        {
          path: home.objetivo,
          element: <ObjetivoPage />,
        },
        {
          path: home.progreso,
          element: <ProgresoPage />,
        },
        {
          path: home.reunion,
          element: <ReunionPage />,
        },
        {
          path: home.reuniones,
          element: <ReunionesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
