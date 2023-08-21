const dispositivosDto = require("../../model/dto/dispositivos.dto");

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
      { _id: req.params.id }, // Asegúrate de proporcionar el ID correcto
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
