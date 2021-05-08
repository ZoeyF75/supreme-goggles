const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

//middleware 
app.use(cors());
app.use(express.json());

//routes

app.listen(5000, () => {
  console.log("server has started on port 5000");
})

//add to photos
app.post("/phtos", async(req, res) => {

})

//delete photos