const conn = require('../database/mysql')



const getAll = (req,res)=>{
    const sql= "select * from rooms"
    conn.query(sql,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}
const getOne = (req,res)=>{
    const sql= `select * from rooms where rooms_id=${req.params.id}`
    conn.query(sql,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}
const add = (req,res)=>{
    const sql="insert into rooms set ?"
    conn.query(sql,req.body,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}

const del = (req, res) => {
    const sql = `delete from rooms where id=${req.params.id}`;
    conn.query(sql, (err, result) => {
        err ? res.send(err) : res.send(result);
    });
};


const update =(req,res)=>{
    const sql = `update rooms set ? where id=${req.params.id}`
    conn.query(sql,req.body,(err,result)=>{
        err ? res.send(err) : res.json(result)
    })
}

module.exports = {getAll,getOne,add,del,update}





