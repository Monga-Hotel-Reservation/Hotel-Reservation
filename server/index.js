const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const db = require("./database/mysql");
const Routes2 = require("./routes/routes2");
const Routes3 = require("./routes/routes3")
const jwt =require("jsonwebtoken")
const saltRounds = 10;

const app = express();
const port = 5000; // Change the port to 5000

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods:["POST","GET","DELETE"],
  credentials:true
}));
app.use(cookieParser());

// Add any additional middleware if needed

app.use("/image",Routes3 );
app.use("/api/rooms", Routes2);


app.get('/getAll',(req,res)=>{
  let sql="SELECT * FROM users";
  db.query(sql,(err,results) =>{
    if (err) throw err;
    res.send(JSON.stringify(results));
    })
})
app.get("/getOne/:id",(req,res)=>{
  let sql=`SELECT * FROM users where email="${req.params.id}"`;
  db.query(sql,(err,result) =>{
    err? res.send(err) : res.send(result)
  })
})
app.post('/register', (req, res) => {
  const sql = "INSERT INTO users (`fullName`, `email`, `password`,`Role`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });

    const values = [
      req.body.fullName,
      req.body.email,
      hash,
      req.body.Role
    ];

    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Error inserting data into server" });

      return res.json({ Status: "Success" });
    });
  });
});

app.post('/login', (req, res) => {
  const sql = `SELECT * FROM users WHERE email = ?`;

  db.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ Error: "Login error in server" });

    if (result.length > 0) {
      bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
        if (err) return res.json({ Error: "Password compare error" });
        if (response) {
          const fullName = result[0].fullName
          const token = jwt.sign({fullName},"jwt-secret-key" , {expiresIn :"1d"})
          res.cookie('token',token)
          return res.json({ Status: "Success"  });
        } else {
          return res.json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.json({ Error: "No email existed" });
    }
  });
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
}); 

module.exports = db;
