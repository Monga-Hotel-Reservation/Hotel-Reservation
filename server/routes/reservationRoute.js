const express = require ("express")
const Routes4 = express.Router()
const controlleur = require("../controllers/controller.Reservation")


Routes4.get('/get',controlleur.getAllReservation)
Routes4.post('/add',controlleur.addOneReservation)
Routes4.delete('/del/:id',controlleur.delReservation)
module.exports= Routes4