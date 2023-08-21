const dispositivosDto = require("../../model/dto/dispositivos.dto");

/* La función `exports.createdispositivo` es una función de controlador que maneja la creación de un
nuevo "dispositivo" (dispositivo) en un sistema. */
exports.createdispositivo = async (req, res, next) => {
  try {
    const dispositivoData = {
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      marca: req.body.marca,
      actualizacion: req.body.actualizacion,
      precio: req.body.precio,
    };

    const nuevoDispositivo = await dispositivosDto.create(dispositivoData);
    return res.status(201).json({
      info: nuevoDispositivo,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message, // Captura el mensaje de error
    });
  }
};

/* La función `exports.updatedispositivo` es una función de controlador que maneja la actualización de
un "dispositivo" (dispositivo) en un sistema. */
exports.updatedispositivo = async (req, res, next) => {
  try {
    const dispositivoData = {
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      marca: req.body.marca,
      actualizacion: req.body.actualizacion,
      precio: req.body.precio,
    };

    const dispositivoActualizado = await dispositivosDto.update(
      { nombre: req.params.nombre }, // Asegúrate de proporcionar el ID correcto
      dispositivoData
    );
    return res.status(200).json({
      info: dispositivoActualizado,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

/* La función `exports.getAll` es una función de controlador que maneja la recuperación de todos los
"dispositivos" (dispositivos) de un sistema. */
exports.getAll = async (req, res, next) => {
  try {
    const dispositivos = await dispositivosDto.getAll({});
    return res.status(200).json({
      info: dispositivos,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

/* La función `exports.getbyMarca` es una función de controlador que maneja la recuperación de todos
los "dispositivos" (dispositivos) con una "marca" (marca) específica de un sistema. */
exports.getbyMarca = async (req, res, next) => {
  try {
    const dispositivos = await dispositivosDto.getByMarca({
      marca: req.params.marca,
    });
    return res.status(200).json({
      info: dispositivos,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

/* La función `exports.deleteDispositivo` es una función de controlador que maneja la eliminación de un
"dispositivo" (dispositivo) en un sistema. */
exports.deleteDispositivo = async (req, res, next) => {
  try {
    await dispositivosDto.delete({ nombre: req.params.nombre });
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
