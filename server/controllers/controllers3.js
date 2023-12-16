const conn =require("../database/mysql")


const getAll =(req,res)=>{
    const sql ="select * from images "
    conn.query(sql,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}

const getOne =(req,res)=>{
    const sql =`select * from images where rooms_id=${req.params.roomId}`
    conn.query(sql,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}

const add = (req,res)=>{
    const sql = `insert into images set ?`
    conn.query(sql,req.body,(err,result)=>{
        err ? res.send(err) : res.send(result)
    })
}

const del = (req,res)=>{
    const sql = `delete from images where rooms_id=${req.params.roomId}`
    conn.query(sql,(err,result)=>{
        err ? res.send(err) : res.send(result)
    })
}

const update =(req,res)=>{
    const sql = `update images set ? where id=${req.params.id}`
    conn.query(sql,req.body,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}

module.exports ={getAll, getOne,add,del,update }