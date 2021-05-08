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
app.post("/photos", async(req, res) => {
  try {
    const{ title , url } = req.body;
    const newImage = await pool.query(`
      INSERT INTO photos (title, url)
      VALUES($1, $2)
      RETURNING *;
    `, [title, url])
    res.json(newImage.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
});

//gets all saved photos
app.get("/photos", (req, res) => {
  try {
    const allPhotos = await pool.query(`
      SELECT * FROM photos;
    `)
    res.json(allPhotos.rows);
  } catch (err) {
      console.error(err.message);
  }
});

//search/find specific image, change id to title potentially
app.get("/photos/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const photo = await pool.query(`
        SELECT * FROM photos WHERE id = $1
      `, [id])
      res.json(photo.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
});

//update
app.put("/photos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;
    const updatephoto = await pool.query(`
          UPDATE photos
          SET title = $1 url = $2
          WHERE id = $3
    `[title, url, id])
    res.json("Photo was updated!");
  } catch (err) {
      console.error(err.message);
  }
});

//delete photo
app.delete("/photos:id", async (req, res) => {
  try {
    const deletePhoto = await pool.query(`
      DELETE FROM photo
      WHERE id = $1
    `,[id])
    res.json("Photo was deleted.");
  } catch (err) {
    console.error(err.message);
  }
})