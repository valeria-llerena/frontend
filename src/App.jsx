import ObjetivosPage from "./pages/ObjetivosPage";
import ProgresoPage from "./pages/ProgresoPage";
import ReunionPage from "./pages/ReunionPage";
import ReunionesPage from "./pages/ReunionesPage";
import HomePage from "./pages/HomePage";
import mainRoutes from "./shared/navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: mainRoutes.objetivos,
          element: <ObjetivosPage />,
        },
        {
          path: mainRoutes.progreso,
          element: <ProgresoPage />,
        },
        {
          path: mainRoutes.reunion,
          element: <ReunionPage />,
        },
        {
          path: mainRoutes.reuniones,
          element: <ReunionesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
