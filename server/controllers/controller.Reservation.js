const conn = require("../database/mysql")

const getAllReservation = ((req,res)=>{
    conn.query("SELECT * FROM reservation",(err,result)=>{
        err? res.send(err) : res.json(result)
    })
})

const addOneReservation =((req,res)=>{
    console.log(req.body.objj)
    const sql= `insert into reservation set ?`
    conn.query(sql,req.body.objj,(err,result)=>{
        err? res.send(err) : res.json(result)
    })
})

const delReservation = (req,res)=>{
    const sql = `delete from reservation where id=${req.params.id}`
    conn.query(sql,(err,result)=>{
        err ? res.send(err) : res.send(result)
    })
}

 
module.exports= {getAllReservation,addOneReservation,delReservation}