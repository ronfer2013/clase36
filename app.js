const express = require("express");
const app = express()
const path = require("path")
const port = 3030

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")) )
app.get("/detalle", (req, res) => res.sendFile(path.join(__dirname, "views", "detalle.html")) )
app.listen(port,() => console.log("server running in http://localhost:" + port))