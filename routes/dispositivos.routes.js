const controller = require("../controller/logic/dispositivos.controller")


module.exports = (app) =>{
    app.get("/dispositivos", (req, res, next) =>{
        controller.getAll(req, res, next)}
    )
    
    app.post("/dispositivos", (req, res, next) =>{
        controller.createdispositivo(req, res, next)}
    )

    app.put("/dispositivos", (req, res, next) =>{
        controller.updatedispositivo(req, res, next)}
    )

    app.delete("/dispositivos", (req, res, next) =>{
        controller.deleteDispositivo(req, res, next)}
    )

    app.get("/dispositivos/byMarca/:marca", (req, res, next) =>{
        controller.getbyMarca(req, res, next)}
    )

}

