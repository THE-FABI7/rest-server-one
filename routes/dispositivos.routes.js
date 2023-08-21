const controller = require("../controller/logic/dispositivos.controller");

/* El código está exportando una función que toma un objeto `app` como parámetro. Esta función
configura las rutas para el manejo de solicitudes HTTP relacionadas con "dispositivos". */
module.exports = (app) => {
  app.get("/dispositivos", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.post("/dispositivos", (req, res, next) => {
    controller.createdispositivo(req, res, next);
  });

  app.put("/dispositivos/:nombre", (req, res, next) => {
    controller.updatedispositivo(req, res, next);
  });

  app.delete("/dispositivos/:nombre", (req, res, next) => {
    controller.deleteDispositivo(req, res, next);
  });

  app.get("/dispositivos/byMarca/:marca", (req, res, next) => {
    controller.getbyMarca(req, res, next);
  });
};
