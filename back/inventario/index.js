require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const http = require('http')
const indexRouter = require("./routes/router.js");
const httpServer = new http.Server(app);
const port = (process.env.PORT || 8080);
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.json({limit: '1050mb'}));
app.use(bodyParser.urlencoded({limit: '1050mb', extended: true}));
app.use("/api", indexRouter);


httpServer.listen(3002, '172.26.14.23', ()=>{
    console.log("Servidor iniciado.")
})