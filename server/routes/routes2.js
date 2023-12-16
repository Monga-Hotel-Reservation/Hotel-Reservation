const express =require("express")
const Routes2 = express.Router()
const Controlleur = require('../controllers/controlleur2')

Routes2.get("/get",Controlleur.getAll)
Routes2.get("/getOne/:id",Controlleur.getOne)
Routes2.post('/add',Controlleur.add)
Routes2.delete('/del/:id',Controlleur.del)
Routes2.put("/upd/:id",Controlleur.update)

module.exports =Routes2