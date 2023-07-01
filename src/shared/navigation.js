const mainRoutes = {
  login: "/login",
  home: "/",
};

export default {
  home: {
    init: mainRoutes.home,
    objetivos: "/objetivos",
    objetivo: "/objetivos/:id",
    progreso: "/progreso",
    reuniones: "/reuniones",
    reunion: "/reunion",
  },
  mainRoutes,
};
