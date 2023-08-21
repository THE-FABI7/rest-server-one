// dto
const dispositivosDto = require("../../model/dto/dispositivos.dto");

exports.createdispositivo = (req, res, next) => {
 /* El código está creando un objeto llamado `dispositivo` con las propiedades `nombre`, `tipo`,
 `marca`, `valor`, `actualización` y `precio`. Los valores de estas propiedades se asignan desde el
 objeto `req.body`, que es el cuerpo de la solicitud enviada por el cliente. Este código
 generalmente se usa en una función de controlador de ruta para extraer los datos relevantes del
 cuerpo de la solicitud y almacenarlos en un objeto para su posterior procesamiento o las
 operaciones de la base de datos. */
  let dispositivo = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    marca: req.body.marca,
    actualizacion: req.body.actualizacion,
    precio: req.body.precio,
  };

  dispositivosDto.create(dispositivo, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(201).json({
      info: data,
    });
  });
};
/* La función `exports.updatedispositivo` es una función de controlador que maneja la operación de
actualización de un "dispositivo" (dispositivo) en la base de datos. */
exports.updatedispositivo = (req, res, next) => {
  let dispositivo = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    marca: req.body.marca,
    actualizacion: req.body.actualizacion,
    precio: req.body.precio,
  };

  dispositivosDto.update(dispositivo, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(201).json({
      info: data,
    });
  });
};
/**Allows to get all the dispositivos in the db */
exports.getAll = (req, res, next) => {
  dispositivosDto.getAll((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      info: data,
    });
  });
}


/**Allows to get dispositivo filtered by marca */
exports.getbyMarca = (req, res, next) => {
  dispositivosDto.getbyMarca(req.params.marca, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      info: data,
    });
  });
};
/**Allows to delete one register from the db */
exports.deleteDispositivo = () => {
  dispositivosDto.delete({ _nombre: req.params.nombre }, dispositivo, (err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(204).json();
  });
};