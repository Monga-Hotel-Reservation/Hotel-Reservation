const express =require("express")
const Routes3 = express.Router()
const Controlleur = require('../controllers/controllers3')
const connection = require("../database/mysql")

Routes3.get("/getAll",Controlleur.getAll)
Routes3.get("/get/:roomId",Controlleur.getOne)
Routes3.post("/add",Controlleur.add)
Routes3.delete("/del/:roomId",Controlleur.del)
Routes3.put("/edit/:id",Controlleur.updateImg)

module.exports =Routes3