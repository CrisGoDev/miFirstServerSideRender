require('dotenv').config();
const express = require("express");
const app = express();
const hbs = require('hbs');
const port =process.env.PORT;

//HandleBars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/Partials', function (err) {});


//servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Cristhian Gomez",
    titulo: "deja de dar papaya",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Cristhian Gomez",
    titulo: "deja de dar papaya",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Cristhian Gomez",
    titulo: "deja de dar papaya",
  });
});

app.listen(port);
