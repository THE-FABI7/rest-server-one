// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const dispostivosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  actualizacion: {
    type: Date,
    required: true,
    min: new Date("2010-01-01"),
    max: new Date("2023-08-19"),
  },
  precio: {
    type: Number,
    required: true,
    min: 100000,
    max: 7000000,
  },
});

dispostivosSchema.plugin(uniqueValidator);
module.exports = dispostivosSchema;
