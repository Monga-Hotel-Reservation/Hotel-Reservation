const express = require("express");
//import router
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add api 

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});