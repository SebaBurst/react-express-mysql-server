const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "auctionwars",
})

app.use(cors());
app.use(express.json());

//Register user Method
app.post("/insertProducto", (req, res) =>{
    const producto = req.body.producto;
    const inicial = req.body.inicial;
    let SQL =
    "INSERT INTO subastas (producto, inicial) VALUES (?, ?)";
    db.query(SQL,[producto, inicial], (err, result) =>{
      console.log(err);
    });
  
})


//Register user Method
app.post("/insertOferta", (req, res) =>{
  const inicial = req.body.inicial;
  const productoRef = req.body.productoRef;

  let SQL =
  "INSERT INTO ofertas (productoRef, oferta) VALUES (?, ?)";
  db.query(SQL,[productoRef, inicial], (err, result) =>{
    console.log(err);
  });

})






app.get("/getSubastas", (req, res) => {
    const sqlSelect = "SELECT * FROM subastas";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });
  

app.listen(3001, () => {
    console.log("Estoy Corriendo en el mysql");

});