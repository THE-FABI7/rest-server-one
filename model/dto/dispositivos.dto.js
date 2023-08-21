// packes
const mongoose = require("mongoose");
const db = require("../db/mongodb");

const schema = require("../schemas/dispositivos");

db();
/**Declares the data managemet functions */
schema.statics = {
  create: async function (data) {
    try {
      const doc = new this(data);
      const createdDoc = await doc.save();
      return createdDoc;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en la capa superior
    }
  },
  getAll: function (query) {
    return this.find(query).exec(); // Retorna una Promesa
  },
  getByMarca: function (query) {
    return this.find(query).exec(); // Retorna una Promesa
  },
  update: function (query, data) {
    return this.findOneAndUpdate(query, { $set: data }, { new: true }).exec(); // Retorna una Promesa
  },
  delete: function (query) {
    return this.findOneAndDelete(query).exec(); // Retorna una Promesa
  },
};

const dto = mongoose.model("coll_dispositivos", schema);
module.exports = dto;
