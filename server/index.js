const express = require("express");
const db = require ("./database/mysql")
const router = require ("./routes/routes")
const cors = require ('cors')

const app = express();
const PORT =  3100


app.use(express.json());

app.use (cors())


app.use("/api/hotel", router);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});