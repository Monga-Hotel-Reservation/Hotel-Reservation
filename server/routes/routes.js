const router = require('express').Router();
const controllers = require ("../controllers/controllers")

router.get("/allRooms", controllers.selectAllRoom);
router.get("/oneRoom/:id", controllers.getOneRoom);
router.get("/reservation/:user_id", controllers.getReservation);
router.post("/addReservation", controllers.addReservation);
router.get("/search/:name", controllers.getRoomByName);
router.delete("/deleteReservation/:id", controllers.removeReservation)

module.exports = router;