const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const expressServer = express()
const router = require("./route")
const cors = require("cors")
const http = require("http")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bibi:Bistar!87@cluster0.6ipar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connection
    .once('open', () => console.log("Connecté à la base MongoDB"))
    .on("error", error => console.log("Erreur de connexion à MongoDB : ", error))

expressServer.use(morgan('combined'))
expressServer.use(bodyParser.json({type: "*/*"}))
expressServer.use(cors())

const port = 3090
const server = http.createServer(expressServer)
router(expressServer)
server.listen(port)

console.log(`Le serveur écoute sur le port ${port}`)