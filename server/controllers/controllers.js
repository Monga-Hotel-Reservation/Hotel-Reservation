const db = require("../database/mysql");


const selectAllRoom = function (req, res) {
    db.query("SELECT * FROM rooms", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  };

  const getOneRoom =function (req, res){
    db.query(`SELECT * FROM rooms WHERE id=?`, req.params.id, (err, result)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
          }
        }); 
};

const addReservation =function (req, res) {
      db.query("INSERT INTO reservation SET ?", req.body, (err, result)=>{
          if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(result);
            }
          }); 
  };

  const getReservation =function (req, res){
    db.query(`SELECT * FROM reservation WHERE users_id=?`, req.params.id, (err, result)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
          }
        }); 
}; 

const removeReservation = function (req, res){
    db.query(`DELETE FROM reservation WHERE id=?`, req.params.id,(err, result)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
          }
        });
}

const getRoomByName =function (req, res){
    db.query(`SELECT * FROM rooms WHERE name= ?`, req.params.name, (err, result)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
          } 
    })
}

module.exports = {selectAllRoom, getOneRoom, addReservation, getReservation, removeReservation, getRoomByName,}